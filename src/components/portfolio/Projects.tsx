import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import imgVoting from "@/assets/proj-voting.jpg";
import imgDb from "@/assets/proj-db.jpg";
import imgCoffee from "@/assets/proj-coffee.jpg";
import imgTravel from "@/assets/proj-travel.jpg";
import imgBooks from "@/assets/proj-books.jpg";
import imgLearn from "@/assets/proj-learn.jpg";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  category: "Python" | "Web" | "Database" | "Full Stack";
  image: string;
};

const projects: Project[] = [
  {
    title: "Electronic Voting Machine",
    desc: "A secure digital voting platform that authenticates each voter using facial recognition and fingerprint biometrics before casting a vote, eliminating duplicate and proxy voting. Why this stack: Python offers fast prototyping with rich AI libraries, OpenCV gives accurate real-time face capture and processing, and the face_recognition library wraps proven dlib models — together giving a reliable, low-cost biometric solution without heavy hardware.",
    tech: ["Python", "OpenCV", "Face Recognition"],
    category: "Python",
    image: imgVoting,
  },
  {
    title: "Data Loading & Deduplication",
    desc: "Automated ETL pipelines that load, clean and deduplicate monthly client data across 120+ tables. Why this stack: SQL Server provides enterprise-grade reliability and indexing for large datasets, SSIS visually orchestrates complex ETL flows with built-in scheduling and error handling, and T-SQL stored procedures keep heavy transformations close to the data — delivering up to 85% efficiency gains over manual processing.",
    tech: ["SQL Server", "SSIS", "T-SQL"],
    category: "Database",
    image: imgDb,
  },
  {
    title: "Coffee Shop Website",
    desc: "A modern, responsive coffee shop website with elegant menu browsing and online ordering. Why this stack: pure HTML, CSS and JavaScript keep the site lightning-fast and SEO-friendly with zero framework overhead, making it perfect for a content-led small-business site that loads instantly on mobile networks.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image: imgCoffee,
  },
  {
    title: "Travel Website",
    desc: "A responsive travel booking and destination showcase with rich imagery and smooth navigation. Why this stack: HTML/CSS deliver pixel-perfect responsive layouts, while vanilla JavaScript powers filters and interactivity without bloat — ensuring fast TTFB and great Core Web Vitals, which is critical for travel discovery sites.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image: imgTravel,
  },
  {
    title: "Online Book Application",
    desc: "A full-stack bookstore with user authentication, search, cart and order tracking. Why this stack: Python keeps business logic clean, Flask is a lightweight, flexible web framework ideal for medium-scale apps, and SQL provides ACID-compliant storage for orders and inventory — a proven combination for reliable transactional web apps.",
    tech: ["Python", "Flask", "SQL"],
    category: "Full Stack",
    image: imgBooks,
  },
  {
    title: "Learn Sphere",
    desc: "A modern e-learning and course marketplace with interactive lessons and product listings. Why this stack: React's component model makes complex learning UIs maintainable, JavaScript enables rich interactivity (quizzes, progress tracking), and REST APIs cleanly separate the front-end from backend services so the platform can scale and integrate with payment and content providers.",
    tech: ["React", "JavaScript", "APIs"],
    category: "Full Stack",
    image: imgLearn,
  },
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
              className="group relative overflow-hidden rounded-2xl glass p-4 transition hover:-translate-y-1.5 hover:ring-neon"
            >
              <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-0 blur-2xl transition group-hover:opacity-20" />
              <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
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
                <a href="https://github.com/bsureshkumar005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10"><Github size={14} /> Code</a>
                <a href="#contact" className="inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-hero)] px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"><ExternalLink size={14} /> Live</a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
