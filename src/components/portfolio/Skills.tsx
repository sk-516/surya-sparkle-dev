import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiFlask, SiMysql } from "react-icons/si";
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

const stack: { name: string; Icon: IconType; tone: string }[] = [
  { name: "Python", Icon: FaPython, tone: "text-neon" },
  { name: "Java", Icon: FaJava, tone: "text-neon-2" },
  { name: "JavaScript", Icon: FaJs, tone: "text-neon-3" },
  { name: "SQL", Icon: SiMysql, tone: "text-primary" },
  { name: "Flask", Icon: SiFlask, tone: "text-foreground" },
  { name: "React", Icon: FaReact, tone: "text-neon" },
  { name: "HTML5", Icon: FaHtml5, tone: "text-neon-2" },
  { name: "CSS3", Icon: FaCss3Alt, tone: "text-primary" },
  { name: "Git", Icon: FaGitAlt, tone: "text-neon-3" },
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
          <h3 className="mb-4 font-display text-xl">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
            {stack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex flex-col items-center gap-2 rounded-xl glass p-4 transition hover:-translate-y-1 hover:ring-neon"
              >
                <t.Icon
                  aria-label={`${t.name} logo`}
                  className={`h-11 w-11 shrink-0 drop-shadow-[0_0_18px_color-mix(in_oklab,currentColor_45%,transparent)] transition group-hover:scale-110 ${t.tone}`}
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
