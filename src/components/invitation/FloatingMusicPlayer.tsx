import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { invitation } from "@/content/invitation";
import { useMusic } from "@/lib/music-state";

export function FloatingMusicPlayer() {
  const { isPlaying, toggle } = useMusic();
  const [isExpanded, setIsExpanded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Send play/pause commands to YouTube iframe whenever isPlaying changes
  useEffect(() => {
    const send = (func: string, args: unknown = "") => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func,
            args,
          }),
          "*"
        );
      }
    };

    if (isPlaying) {
      send("unMute");
      send("setVolume", [100]);
      send("playVideo");
      const t1 = setTimeout(() => {
        send("unMute");
        send("playVideo");
      }, 400);
      const t2 = setTimeout(() => {
        send("unMute");
        send("playVideo");
      }, 1000);
      const t3 = setTimeout(() => {
        send("unMute");
        send("playVideo");
      }, 2000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      send("pauseVideo");
      return undefined;
    }
  }, [isPlaying]);

  const onIframeLoad = () => {
    if (isPlaying && iframeRef.current && iframeRef.current.contentWindow) {
      setTimeout(() => {
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "unMute",
            args: "",
          }),
          "*"
        );
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: "playVideo",
            args: "",
          }),
          "*"
        );
      }, 400);
    }
  };

  return (
    <>
      {/* Offscreen YouTube player with JavaScript API (keeps audio thread alive unlike display:none) */}
      <div className="fixed -top-[9999px] -left-[9999px] h-1 w-1 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
        <iframe
          ref={iframeRef}
          onLoad={onIframeLoad}
          width="200"
          height="200"
          src={`https://www.youtube.com/embed/${invitation.music.youtubeId}?enablejsapi=1&loop=1&playlist=${invitation.music.youtubeId}`}
          title="Floating Background Player"
          allow="autoplay; encrypted-media"
        />
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.95 }}
              className="glass-plate flex items-center gap-3 rounded-full px-4 py-2 shadow-xl backdrop-blur-md"
            >
              <div className="flex flex-col text-left">
                <span className="font-display text-xs text-primary font-medium">
                  {invitation.music.title}
                </span>
                <span className="font-sans text-[0.6rem] tracking-wider text-gold-deep uppercase">
                  {isPlaying ? "Playing melody" : "Paused"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={toggle}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
          className="relative flex h-13 w-13 items-center justify-center rounded-full border border-gold/60 bg-gradient-to-tr from-[var(--ivory)] to-white/95 text-primary shadow-xl backdrop-blur-md cursor-pointer"
        >
          {/* Animated disc spin */}
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/40"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {isPlaying ? (
            <div className="flex items-center gap-0.5">
              {[8, 14, 10].map((h, i) => (
                <motion.span
                  key={i}
                  className="w-0.5 bg-primary rounded-full"
                  animate={{ height: [4, h, 4] }}
                  transition={{ duration: 0.7 + i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
          ) : (
            <Music size={20} className="text-primary" />
          )}

          {/* Glowing pulse ring when playing */}
          {isPlaying && (
            <motion.span
              className="absolute inset-0 rounded-full border border-gold"
              animate={{ scale: [1, 1.35, 1.5], opacity: [0.6, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </motion.button>
      </div>
    </>
  );
}
