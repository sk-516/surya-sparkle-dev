import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  category: "Python" | "Web" | "Database" | "Full Stack";
};

const projects: Project[] = [
  { title: "Electronic Voting Machine", desc: "Secure voting system with facial recognition & fingerprint biometric authentication.", tech: ["Python", "OpenCV", "Face Recognition"], category: "Python" },
  { title: "Data Loading & Deduplication", desc: "Automated ETL pipelines using SQL Server & SSIS for monthly client data processing.", tech: ["SQL Server", "SSIS", "T-SQL"], category: "Database" },
  { title: "Coffee Shop Website", desc: "Modern responsive coffee shop site with elegant UI and online ordering features.", tech: ["HTML", "CSS", "JavaScript"], category: "Web" },
  { title: "Travel Website", desc: "Responsive travel booking & destination showcase with attractive UI.", tech: ["HTML", "CSS", "JavaScript"], category: "Web" },
  { title: "Online Book Application", desc: "Bookstore web app with login, search, and order tracking.", tech: ["Python", "Flask", "SQL"], category: "Full Stack" },
  { title: "Learn Sphere", desc: "Modern e-commerce learning platform with interactive courses & products.", tech: ["React", "JavaScript", "APIs"], category: "Full Stack" },
];

const cats = ["All", "Python", "Web", "Database", "Full Stack"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const list = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" eyebrow="Portfolio" title="Featured Projects">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === c
                ? "bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1.5 hover:ring-neon"
            >
              <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-0 blur-2xl transition group-hover:opacity-20" />
              <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-transparent font-mono text-4xl text-gradient">
                {"{ }"}
              </div>
              <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[color:var(--neon)]">
                {p.category}
              </span>
              <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map(t => (
                  <span key={t} className="rounded-md border border-border bg-white/5 px-2 py-0.5 font-mono text-[10px]">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10"><Github size={14} /> Code</a>
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-hero)] px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"><ExternalLink size={14} /> Live</a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
