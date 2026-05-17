import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";

export type DemoSlide = {
  title: string;
  body: string;
  bullets?: string[];
  accent?: string;
};

export type DemoProject = {
  title: string;
  image: string;
  tech: string[];
  slides: DemoSlide[];
};

const SECONDS_PER_SLIDE = 10;

export function ProjectDemo({
  project,
  onClose,
}: {
  project: DemoProject;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const total = project.slides.length;

  // AI voiceover via browser SpeechSynthesis
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (muted || !playing) return;
    const slide = project.slides[idx];
    const script = [
      `${slide.accent ?? project.title}.`,
      `${slide.title}.`,
      slide.body,
      slide.bullets?.length ? `Key points: ${slide.bullets.join(". ")}.` : "",
    ].filter(Boolean).join(" ");
    const u = new SpeechSynthesisUtterance(script);
    u.rate = 1.05;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v => /en-(US|GB|IN)/i.test(v.lang) && /female|samantha|google|natural|aria|jenny/i.test(v.name))
      || voices.find(v => /^en/i.test(v.lang));
    if (preferred) u.voice = preferred;
    window.speechSynthesis.speak(u);
    return () => window.speechSynthesis.cancel();
  }, [idx, playing, muted, project]);

  useEffect(() => {
    if (!playing) return;
    const step = 50;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + step / (SECONDS_PER_SLIDE * 1000);
        if (next >= 1) {
          setIdx((i) => (i + 1 < total ? i + 1 : i));
          return 0;
        }
        return next;
      });
    }, step);
    return () => clearInterval(id);
  }, [playing, total]);

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0);
  }, [idx]);

  // Auto-stop on last slide finish
  useEffect(() => {
    if (idx === total - 1 && progress >= 0.999) setPlaying(false);
  }, [idx, progress, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") { e.preventDefault(); setPlaying((p) => !p); }
      if (e.key === "ArrowRight") setIdx((i) => Math.min(total - 1, i + 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, total]);

  const slide = project.slides[idx];
  const totalSeconds = total * SECONDS_PER_SLIDE;
  const elapsed = idx * SECONDS_PER_SLIDE + progress * SECONDS_PER_SLIDE;

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-3 backdrop-blur-md sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-black/40 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-[10px] font-bold text-primary-foreground">
              ▶
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--neon)]">
                Project Walkthrough · AI Voice
              </p>
              <h3 className="text-sm font-bold leading-tight sm:text-base">{project.title}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute AI voice" : "Mute AI voice"}
              className="grid h-9 w-9 place-items-center rounded-full glass transition hover:bg-white/10"
              title={muted ? "Unmute AI narration" : "Mute AI narration"}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-[color:var(--neon)]" />}
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center rounded-full glass transition hover:bg-white/10"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Stage */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#0a0a14]">
          {/* Background image with Ken Burns */}
          <motion.img
            key={`bg-${idx}`}
            src={project.image}
            alt=""
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1.18, opacity: 0.35 }}
            transition={{ duration: SECONDS_PER_SLIDE, ease: "linear" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />

          {/* Slide content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--neon-3)] sm:text-xs"
              >
                Chapter {idx + 1} / {total} · {slide.accent ?? project.title}
              </motion.p>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-2 text-2xl font-bold leading-tight sm:text-4xl"
              >
                <span className="text-gradient-hero">{slide.title}</span>
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base"
              >
                {slide.body}
              </motion.p>
              {slide.bullets && (
                <ul className="mt-4 grid max-w-2xl gap-1.5 sm:grid-cols-2">
                  {slide.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + i * 0.1 }}
                      className="flex items-start gap-2 rounded-lg glass px-3 py-1.5 text-xs sm:text-sm"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--neon)]" />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Floating tech chips */}
          <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-1.5 sm:right-6 sm:top-6">
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="rounded-md border border-border bg-black/40 px-2 py-0.5 font-mono text-[10px] backdrop-blur"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="border-t border-border bg-black/40 px-4 py-3">
          {/* Segmented progress */}
          <div className="mb-3 flex gap-1">
            {project.slides.map((_, i) => (
              <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-[image:var(--gradient-hero)] transition-all"
                  style={{
                    width: `${i < idx ? 100 : i === idx ? progress * 100 : 0}%`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                className="grid h-8 w-8 place-items-center rounded-full glass transition hover:bg-white/10"
                aria-label="Previous"
              >
                <SkipBack size={14} />
              </button>
              <button
                onClick={() => {
                  if (idx === total - 1 && progress >= 0.999) {
                    setIdx(0);
                    setProgress(0);
                  }
                  setPlaying((p) => !p);
                }}
                className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon transition hover:scale-105"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
                className="grid h-8 w-8 place-items-center rounded-full glass transition hover:bg-white/10"
                aria-label="Next"
              >
                <SkipForward size={14} />
              </button>
            </div>
            <p className="font-mono text-[11px] text-muted-foreground">
              {fmt(elapsed)} / {fmt(totalSeconds)}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
