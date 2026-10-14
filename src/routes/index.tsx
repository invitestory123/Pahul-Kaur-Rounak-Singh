import { createFileRoute } from "@tanstack/react-router";
import { IntroGate } from "@/components/invitation/IntroGate";
import { Hero } from "@/components/invitation/Hero";
import { CoupleStory } from "@/components/invitation/CoupleStory";
import { Countdown } from "@/components/invitation/Countdown";
import { Details } from "@/components/invitation/Details";
import { Timeline } from "@/components/invitation/Timeline";
import { Gallery } from "@/components/invitation/Gallery";
import { Footer } from "@/components/invitation/Footer";
import { FloatingMusicPlayer } from "@/components/invitation/FloatingMusicPlayer";
import { invitation } from "@/content/invitation";

const title = `${invitation.couple.groom} & ${invitation.couple.bride} — Wedding Invitation | 19 December 2026`;
const description = `Our family warmly welcomes you to celebrate the Anand Karaj and wedding of ${invitation.couple.groom} and ${invitation.couple.bride} on ${invitation.dateLabel} at ${invitation.venue.name}.`;
const ogImage = "/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      {
        property: "og:image:alt",
        content: `${invitation.couple.groom} & ${invitation.couple.bride} — Wedding Invitation`,
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:type", content: "website" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      {
        name: "twitter:image:alt",
        content: `${invitation.couple.groom} & ${invitation.couple.bride} — Wedding Invitation`,
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <IntroGate />
      <Hero />
      <CoupleStory />
      <Countdown />
      <Details />
      <Timeline />
      <Gallery />
      <Footer />
      <FloatingMusicPlayer />
    </main>
  );
}
