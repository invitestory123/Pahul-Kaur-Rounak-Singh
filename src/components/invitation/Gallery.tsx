import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { galleryPhotos } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

export function Gallery() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  const photos = galleryPhotos;

  return (
    <section className="relative overflow-hidden px-5 py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--blush) 22%, var(--ivory)) 60%, var(--ivory) 100%)",
        }}
      />
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Chapter Four" title="Cherished Moments" note="A glimpse into their journey together" />
        <Ornament className="mt-8" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {photos.map((p, i) => (
            <Reveal key={p.alt} delay={i * 0.06} className={p.span}>
              <motion.button
                type="button"
                onClick={() => setOpen(i)}
                whileHover={{ y: -6 }}
                animate={reduced ? {} : { y: [0, -4, 0] }}
                transition={{
                  y: { duration: 7 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                className="plate group relative block h-full w-full overflow-hidden rounded-[1.8rem] p-2 text-left"
              >
                <div className="relative h-full overflow-hidden rounded-[1.4rem]">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className={`${p.ratio} h-full w-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.05]`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between text-white">
                      <p className="font-display text-sm tracking-wide drop-shadow-sm">{p.caption}</p>
                      <ZoomIn size={18} className="text-white/80" />
                    </div>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="relative max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <motion.img
                src={photos[open]!.src}
                alt={photos[open]!.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-[1.4rem] shadow-2xl object-contain mx-auto"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="mt-3 text-center font-display text-base text-white/90 drop-shadow">
                {photos[open]!.caption}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close photo preview"
              className="absolute top-6 right-6 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition-colors"
              onClick={() => setOpen(null)}
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
