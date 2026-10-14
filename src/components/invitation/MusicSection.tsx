import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Play, Pause, ExternalLink, Sparkles, Film, ChevronDown, ChevronUp } from "lucide-react";
import { invitation } from "@/content/invitation";
import { useMusic } from "@/lib/music-state";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

export function MusicSection() {
  const { isPlaying, toggle } = useMusic();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="music" className="relative overflow-hidden px-5 py-24">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--peach) 20%, var(--ivory)) 40%, color-mix(in oklab, var(--blush) 24%, var(--ivory)) 75%, var(--ivory) 100%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle
          eyebrow="The Wedding Melody"
          title="Sunehra"
          note="Phullaan Naal Sajjeya Jehda · Lost Stories & Jai Dhir"
        />
        <Ornament className="mt-8" />

        {/* Music Player & Lyrics Card */}
        <Reveal delay={0.1} className="mt-12">
          <div className="plate paper-grain relative overflow-hidden rounded-[2.2rem] p-6 sm:p-10 text-center">
            {/* Ambient decorative flourishes */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full blur-2xl"
              style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full blur-2xl"
              style={{ background: "color-mix(in oklab, var(--blush) 40%, transparent)" }}
            />

            {/* Spinning vinyl disc & play button */}
            <div className="relative mx-auto flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-gold/60 bg-gradient-to-tr from-primary/90 to-primary/70 shadow-xl"
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold/80 bg-[var(--ivory)] shadow-inner">
                    <Music className="text-primary" size={20} />
                  </div>
                </motion.div>

                {/* Main Play / Pause Button */}
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
                  className="absolute flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-gold-deep to-gold text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
              </div>

              {/* Sound waves visualization when playing */}
              <div className="mt-5 flex items-center gap-1.5 h-6">
                {[4, 14, 22, 10, 18, 24, 12, 6, 20, 8].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-1 rounded-full bg-gold-deep"
                    animate={
                      isPlaying
                        ? { height: [4, h, 6, h * 0.8, 4] }
                        : { height: 4 }
                    }
                    transition={{
                      duration: 0.9 + (i % 3) * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <p className="mt-4 font-sans text-xs tracking-[0.3em] uppercase text-gold-deep font-semibold">
                {isPlaying ? "Now Playing" : "Tap to Play Song"}
              </p>
              <h3 className="mt-1 font-display text-2xl text-primary sm:text-3xl">
                {invitation.music.title}
              </h3>
            </div>

            {/* Illustrated Lyrics Scroll */}
            <div className="mt-8 rounded-2xl border border-gold/30 bg-white/40 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 text-gold-deep mb-4">
                <Sparkles size={16} />
                <span className="font-sans text-[0.62rem] tracking-[0.3em] uppercase font-semibold">
                  The Song of Celebration
                </span>
                <Sparkles size={16} />
              </div>

              <div className="space-y-4 font-script text-xl sm:text-2xl italic leading-relaxed text-primary">
                <p className="text-primary/95">
                  &ldquo;Phullaan naal sajjeya jehda, koyi aisa vehda hove...<br />
                  Gaddi saadi jithe jaave, koyi dhol vaje te chann khidda hove&rdquo;
                </p>

                <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-deep not-italic font-semibold">
                  ✨
                </p>

                <p className="text-primary/95">
                  &ldquo;Tere naal jodi saadi, Rab ne banayi ae...<br />
                  Khushiyan di rut aayi, shagna di shaam aayi ae.&rdquo;
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-5 border-t border-gold/20 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowVideo(!showVideo)}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/60 px-5 py-2 font-sans text-[0.68rem] tracking-[0.2em] text-primary uppercase hover:bg-white transition-colors"
                >
                  <Film size={14} /> {showVideo ? "Hide Video" : "Watch Official Video"}
                  {showVideo ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                <a
                  href={invitation.music.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/60 px-5 py-2 font-sans text-[0.68rem] tracking-[0.2em] text-primary uppercase hover:bg-white transition-colors"
                >
                  <ExternalLink size={13} /> Open on YouTube
                </a>
              </div>

              {/* Embedded video player accordion */}
              <AnimatePresence>
                {showVideo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-6"
                  >
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gold/40">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${invitation.music.youtubeId}?autoplay=1`}
                        title="Kudmayi Song Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
