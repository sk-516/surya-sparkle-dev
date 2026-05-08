import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Github, Linkedin, Instagram, Facebook } from "lucide-react";

const ROLES = [
  "Python Backend Developer",
  "Full Stack Developer",
  "SQL & Automation Enthusiast",
  "Problem Solver",
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
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 font-mono text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--neon-3)]" /> Available for opportunities
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl">
            Hi, I'm <span className="text-gradient-hero">Surya</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Suresh Kumar Battala — crafting backends, automations and full-stack experiences.
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
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
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
          <div className="relative float-slow">
            <div className="absolute -inset-6 rounded-full bg-[image:var(--gradient-hero)] opacity-40 blur-2xl" />
            <div className="relative grid h-72 w-72 place-items-center rounded-full bg-[image:var(--gradient-hero)] p-[3px] sm:h-80 sm:w-80">
              <div className="grid h-full w-full place-items-center rounded-full bg-card text-7xl font-bold text-gradient-hero">
                S
              </div>
            </div>
            <div className="absolute -right-2 top-6 rounded-xl glass px-3 py-2 text-xs font-mono">
              <span className="text-[color:var(--neon-3)]">●</span> Python · SQL
            </div>
            <div className="absolute -left-4 bottom-10 rounded-xl glass px-3 py-2 text-xs font-mono">
              <span className="text-[color:var(--neon-2)]">●</span> Flask · React
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
