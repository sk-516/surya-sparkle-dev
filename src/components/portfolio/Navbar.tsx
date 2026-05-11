import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Certifications", "certs"],
  ["Contact", "contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${scrolled ? "glass-strong shadow-card" : "glass"}`}>
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 place-items-center rounded-lg bg-[image:var(--gradient-hero)] px-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-neon">Portfolio</span>
            <span className="text-gradient hidden sm:inline">Suresh Kumar Battala</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-xl bg-[image:var(--gradient-hero)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-neon transition hover:opacity-90 lg:inline-block">
            Hire Me
          </a>
          <button onClick={() => setOpen(v => !v)} className="rounded-lg p-2 text-foreground lg:hidden" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 grid gap-1 rounded-2xl glass-strong p-3 lg:hidden"
            >
              {links.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
