import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";

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
    </Section>
  );
}
