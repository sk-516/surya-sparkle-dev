import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import suryaPhoto from "@/assets/surya.png";
import suryaPhoto2 from "@/assets/surya-2.jpg";
import suryaPhoto3 from "@/assets/surya-3.jpg";
import suryaPhoto4 from "@/assets/surya-4.jpg";

const PHOTOS = [suryaPhoto, suryaPhoto2, suryaPhoto3, suryaPhoto4];

const ROLES = [
  "Python Backend Developer",
  "Database Developer",
  "Web Developer",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1));
        if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);
  const [photoIdx, setPhotoIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhotoIdx((i) => (i + 1) % PHOTOS.length), 2250);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl">
            Hi, I'm <span className="text-gradient-hero">Suresh Kumar Battala</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Computer Science Engineer crafting backends, databases and full-stack experiences.
          </p>
          <p className="mt-3 font-mono text-base sm:text-lg">
            <span className="text-muted-foreground">&gt; </span>
            <span className="text-gradient">{typed}</span>
            <span className="caret" />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition hover:scale-[1.03]">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:bg-white/10">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:border-[color:var(--neon)] hover:text-foreground">
              <FolderGit2 size={18} /> View Projects
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/bsureshkumar005" },
              { Icon: Linkedin, href: "https://linkedin.com/in/b-suresh-kumar-b08101312" },
              { Icon: Instagram, href: "https://instagram.com/wordsorcererx" },
              { Icon: Facebook, href: "https://facebook.com/sureshkumar.battala" },
              { Icon: Mail, href: "mailto:bsureshkumarcse@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition hover:-translate-y-1 hover:text-foreground hover:ring-neon">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative float-bob">
            <div className="absolute -inset-6 rounded-[50%] bg-[image:var(--gradient-hero)] opacity-40 blur-2xl" />
            <div className="relative grid h-80 w-64 overflow-hidden place-items-center rounded-[50%] bg-[image:var(--gradient-hero)] p-[3px] sm:h-96 sm:w-72">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoIdx}
                  src={PHOTOS[photoIdx]}
                  alt="Suresh Kumar Battala"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-[50%] object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              {PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPhotoIdx(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === photoIdx
                      ? "w-6 bg-[image:var(--gradient-hero)] shadow-neon"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
