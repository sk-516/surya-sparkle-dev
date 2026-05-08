import { motion } from "framer-motion";
import { Section } from "./Section";

const tech = [
  { name: "Python", level: 92 },
  { name: "SQL / T-SQL", level: 90 },
  { name: "SQL Server / SSIS", level: 85 },
  { name: "Flask", level: 82 },
  { name: "JavaScript", level: 80 },
  { name: "HTML / CSS", level: 90 },
  { name: "React", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const extras = ["Backend Development", "Database Automation", "ETL Process Development", "Problem Solving", "Team Collaboration", "Full Stack Development"];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Expertise">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          {tech.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="mb-2 flex justify-between font-mono text-sm">
                <span>{s.name}</span>
                <span className="text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-[image:var(--gradient-hero)] shadow-neon"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {extras.map((x, i) => (
              <motion.span
                key={x}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl glass px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:ring-neon"
              >
                {x}
              </motion.span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Python", "SQL", "Flask", "React", "SSIS", "Git"].map((t) => (
              <div key={t} className="rounded-xl glass p-4 text-center font-mono text-sm">
                <div className="mb-1 text-2xl text-gradient">{"</>"}</div>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
