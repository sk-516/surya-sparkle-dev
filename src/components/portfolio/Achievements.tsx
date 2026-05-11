import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Trophy, Award, Code2, BarChart3 } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 1.6, ease: "easeOut", onUpdate: v => setVal(Math.round(v)) });
    return c.stop;
  }, [inView, to, mv]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { n: 6, s: "+", label: "Full-Stack Projects" },
  { n: 85, s: "%", label: "Efficiency Boost via ETL" },
  { n: 120, s: "+", label: "Client Tables Automated" },
  { n: 3, s: "+", label: "Certifications Earned" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Milestones" title="Achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl glass p-6 text-center transition hover:ring-neon"
          >
            <div className="text-4xl font-bold sm:text-5xl"><span className="text-gradient-hero"><Counter to={s.n} suffix={s.s} /></span></div>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { icon: Trophy, title: "Python Programming Award", desc: "Awarded for excellence in Python programming at CodeTantra." },
          { icon: Code2, title: "Multi-Language Programming Awards", desc: "Recognized for outstanding performance in Java, SQL, and Python coding contests." },
          { icon: BarChart3, title: "Data Analytics Certificate", desc: "Completed Data Analytics certification on Coursera." },
          { icon: Award, title: "Consistent Top Performer", desc: "Repeatedly recognized across programming and database challenges." },
        ].map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex gap-4 rounded-2xl glass p-5 transition hover:-translate-y-1 hover:ring-neon"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon">
              <a.icon size={20} />
            </div>
            <div>
              <h3 className="font-bold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
