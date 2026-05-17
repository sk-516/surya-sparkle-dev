import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Github, Linkedin, Instagram, Facebook, Briefcase, Sparkles, Rocket, ShieldCheck } from "lucide-react";
import suryaPhoto from "@/assets/surya-main.png";

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
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-widest text-[color:var(--neon)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--neon)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--neon)]" />
            </span>
            Open to Full-Time Opportunities
          </span>
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] sm:text-7xl">
            Hi, I'm <span className="text-gradient-hero">Suresh Kumar Battala</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="text-foreground font-semibold">Computer Science Engineer</span> with
            <span className="text-foreground"> 1.5+ years of professional experience in Microsoft SQL Server &amp; SSIS</span>
            and <span className="text-foreground">6 months of intensive training in Python Backend &amp; Web Development</span>.
            I design dependable databases, automate ETL workflows and ship clean, scalable full-stack solutions — with strong ownership, clear communication and a delivery-first mindset.
          </p>
          <p className="mt-3 font-mono text-base sm:text-lg">
            <span className="text-muted-foreground">&gt; </span>
            <span className="text-gradient">{typed}</span>
            <span className="caret" />
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              { Icon: Rocket, text: "Production ETL pipelines across 120+ tables" },
              { Icon: ShieldCheck, text: "Security-first, ACID-safe data engineering" },
              { Icon: Sparkles, text: "Clean, accessible UI with modern React" },
              { Icon: Briefcase, text: "Strong communicator & fast learner" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-2 rounded-lg glass px-3 py-2 text-sm">
                <Icon size={14} className="shrink-0 text-[color:var(--neon)]" />
                <span className="text-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition hover:scale-[1.03]">
              <Briefcase size={18} /> Hire Me
            </a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:bg-white/10 hover:ring-neon">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:bg-white/10">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:border-[color:var(--neon)] hover:text-foreground">
              <FolderGit2 size={18} /> View Projects
            </a>
          </div>
          <div className="mt-6 grid max-w-md grid-cols-3 gap-3">
            {[
              { k: "6+", v: "Live Projects" },
              { k: "5+", v: "Roles & Trainings" },
              { k: "100%", v: "Delivery Mindset" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl glass p-3 text-center">
                <p className="font-display text-xl font-bold text-gradient-hero">{s.k}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</p>
              </div>
            ))}
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
            <div className="relative h-96 w-72 overflow-hidden rounded-[50%] bg-[image:var(--gradient-hero)] p-[3px] sm:h-[28rem] sm:w-80">
              <img
                src={suryaPhoto}
                alt="Suresh Kumar Battala"
                className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-[50%] object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
