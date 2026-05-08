import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) { setEnabled(false); return; }
    const m = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);
  if (!enabled) return null;
  return (
    <div
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl transition-transform duration-200"
      style={{ left: pos.x, top: pos.y, background: "radial-gradient(circle, oklch(0.78 0.18 200 / 0.5), transparent 70%)" }}
    />
  );
}

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setW(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div className="h-full bg-[image:var(--gradient-hero)] shadow-neon transition-[width] duration-100" style={{ width: `${w}%` }} />
    </div>
  );
}
