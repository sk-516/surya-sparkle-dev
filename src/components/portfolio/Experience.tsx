import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, CheckCircle2 } from "lucide-react";

const xp = [
  {
    role: "Associate Software Developer",
    company: "Aveinfosys",
    time: "June 2026 – Present",
    bullets: [
      "Building and maintaining production software solutions",
      "Collaborating with cross-functional teams on full-stack features",
      "Writing clean, scalable, and well-tested code",
    ],
  },
  {
    role: "Freelancer — Database Development",
    company: "Independent",
    time: "Aug 2025 – March 2026",
    bullets: [
      "Delivered end-to-end database solutions for independent clients",
      "Designed schemas, stored procedures and optimized SQL queries",
      "Built ETL workflows and reliable data validation pipelines",
    ],
  },
  {
    role: "Microsoft SQL Server & SSIS Trainee",
    company: "Charvee Software Training Institute",
    time: "March 2025 – June 2025",
    bullets: [
      "Automated monthly ETL processes for 120+ client tables using SSIS",
      "Developed stored procedures for data cleaning and transformation",
      "Implemented deduplication algorithms on Microsoft SQL Server",
      "Improved overall automation workflows and data accuracy",
    ],
  },
  {
    role: "Java Full Stack Development Trainee",
    company: "KodNest Technologies Pvt. Ltd.",
    time: "July 2024 – December 2024",
    bullets: [
      "Trained on Java Full Stack Development end-to-end",
      "Built backend modules using Core Java and OOP concepts",
      "Implemented exception handling, collections and multithreading",
      "Developed front-end and integrated full-stack web applications",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've Worked">
      <div className="grid gap-6 md:grid-cols-2">
        {xp.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:ring-neon"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[image:var(--gradient-hero)] opacity-10 blur-2xl transition group-hover:opacity-25" />
            <div className="mb-3 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon">
                <Briefcase size={18} />
              </div>
              <span className="font-mono text-xs text-[color:var(--neon)]">{e.time}</span>
            </div>
            <h3 className="text-xl font-bold">{e.role}</h3>
            <p className="text-muted-foreground">{e.company}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {e.bullets.map(b => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[color:var(--neon-3)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
