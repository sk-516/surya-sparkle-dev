import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  { title: "B.Tech — Computer Science & Engineering", place: "Vemu Institute of Technology", time: "2020 – 2024", score: "CGPA: 8.3" },
  { title: "Intermediate (MPC)", place: "Sri Sathya Sai Junior College", time: "2018 – 2020", score: "Percentage: 95%" },
  { title: "SSC", place: "Zilla Parishad High School", time: "2018", score: "GPA: 8.5" },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Journey" title="Education">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--neon)] via-[color:var(--neon-2)] to-transparent md:left-1/2" />
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
          >
            <div className={`absolute top-3 grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-hero)] shadow-neon ${i % 2 === 0 ? "left-0 md:-right-4 md:left-auto" : "left-0 md:-left-4"}`}>
              <GraduationCap size={16} className="text-primary-foreground" />
            </div>
            <div className="rounded-2xl glass p-5 transition hover:ring-neon">
              <p className="font-mono text-xs text-[color:var(--neon)]">{it.time}</p>
              <h3 className="mt-1 text-lg font-bold">{it.title}</h3>
              <p className="text-muted-foreground">{it.place}</p>
              <p className="mt-2 text-sm font-semibold text-gradient">{it.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
