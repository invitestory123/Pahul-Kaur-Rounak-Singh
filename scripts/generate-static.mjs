import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const indexPath = path.join(distDir, "index.html");

async function generateStaticHtml() {
  console.log("[generate-static] Generating static index.html for distribution...");

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Strategy 1: Render via SSR service bundle built by Vite/Nitro
  const ssrServicePath = path.join(rootDir, "node_modules", ".nitro", "vite", "services", "ssr", "index.js");
  if (fs.existsSync(ssrServicePath)) {
    try {
      console.log(`[generate-static] Found SSR service bundle at ${ssrServicePath}`);
      const ssrModule = await import(pathToFileURL(ssrServicePath).href);
      if (typeof ssrModule.default?.fetch === "function") {
        const response = await ssrModule.default.fetch(new Request("http://localhost/"));
        if (response.status === 200) {
          const html = await response.text();
          if (html.includes("<html") && html.includes("</html>")) {
            fs.writeFileSync(indexPath, html, "utf8");
            console.log(`[generate-static] Successfully generated static index.html via SSR (${html.length} bytes)`);
            return;
          }
        }
      }
    } catch (err) {
      console.warn("[generate-static] SSR render failed, falling back to client SPA template:", err);
    }
  }

  // Strategy 2: Client SPA template fallback
  console.log("[generate-static] Building client SPA index.html fallback...");
  const assetsDir = path.join(distDir, "assets");
  let cssFiles = [];
  let jsFiles = [];

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    cssFiles = files.filter((f) => f.endsWith(".css"));
    jsFiles = files.filter((f) => f.startsWith("index-") && f.endsWith(".js"));
    if (jsFiles.length === 0) {
      jsFiles = files.filter((f) => f.endsWith(".js"));
    }
  }

  const cssTags = cssFiles.map((file) => `<link rel="stylesheet" href="/assets/${file}" />`).join("\n    ");
  const jsTags = jsFiles.map((file) => `<script type="module" src="/assets/${file}"></script>`).join("\n    ");

  const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pahul Kaur &amp; Rounak Singh — Wedding Invitation</title>
    <meta name="description" content="Join Pahul Kaur and Rounak Singh on Saturday, 19 December 2026 at Golden Heritage. An illustrated wedding storybook." />
    <meta name="theme-color" content="#fdf8ef" />
    <meta property="og:title" content="Pahul Kaur &amp; Rounak Singh — Wedding Invitation" />
    <meta property="og:description" content="Join Pahul Kaur and Rounak Singh on Saturday, 19 December 2026 at Golden Heritage. An illustrated wedding storybook." />
    <meta property="og:image" content="/og-image.jpg" />
    <meta property="og:image:alt" content="Pahul Kaur &amp; Rounak Singh — Wedding Invitation" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Pahul Kaur &amp; Rounak Singh — Wedding Invitation" />
    <meta name="twitter:description" content="Join Pahul Kaur and Rounak Singh on Saturday, 19 December 2026 at Golden Heritage." />
    <meta name="twitter:image" content="/og-image.jpg" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Marcellus&amp;family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&amp;family=Karla:wght@300;400;600&amp;display=swap" />
    ${cssTags}
  </head>
  <body>
    <div id="root"></div>
    ${jsTags}
  </body>
</html>`;

  fs.writeFileSync(indexPath, fallbackHtml, "utf8");
  console.log(`[generate-static] Successfully wrote fallback index.html (${fallbackHtml.length} bytes)`);
}

generateStaticHtml().catch((err) => {
  console.error("[generate-static] Fatal error generating index.html:", err);
  process.exit(1);
});
