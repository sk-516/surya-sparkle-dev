import { motion } from "framer-motion";
import { Section } from "./Section";

const tech = [
  { name: "Python", level: 92 },
  { name: "Java", level: 85 },
  { name: "SQL / T-SQL", level: 90 },
  { name: "SQL Server / SSIS", level: 85 },
  { name: "Flask", level: 82 },
  { name: "JavaScript", level: 80 },
  { name: "HTML / CSS", level: 90 },
  { name: "React", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const extras = ["Backend Development", "Database Automation", "ETL Process Development", "Problem Solving", "Team Collaboration", "Full Stack Development"];

const stack = [
  { name: "Python", icon: "python/python-original" },
  { name: "Java", icon: "java/java-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "SQL", icon: "mysql/mysql-original" },
  { name: "Flask", icon: "flask/flask-original" },
  { name: "React", icon: "react/react-original" },
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "Git", icon: "git/git-original" },
];

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
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-3">
            {stack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex flex-col items-center gap-2 rounded-xl glass p-4 transition hover:-translate-y-1 hover:ring-neon"
              >
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                  alt={`${t.name} logo`}
                  loading="lazy"
                  width={36}
                  height={36}
                  className="h-9 w-9 transition group-hover:scale-110"
                />
                <span className="font-mono text-xs">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
