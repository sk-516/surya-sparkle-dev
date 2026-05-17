import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, GraduationCap, MessageCircle, Brain, Sparkles } from "lucide-react";

const cards = [
  { Icon: MapPin, title: "Hometown", value: "Dharmavaram, Andhra Pradesh" },
  { Icon: GraduationCap, title: "University", value: "JNTUA University" },
  { Icon: MessageCircle, title: "Soft Skill", value: "Good Communication Skills" },
  { Icon: Brain, title: "Strength", value: "Strong Problem Solving Ability" },
  { Icon: Sparkles, title: "Religion", value: "Hindu" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who I Am">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <p>
            My name is <span className="text-foreground font-semibold">Suresh Kumar Battala</span>. I was born and brought up in
            <span className="text-foreground"> Dharmavaram, Sri Sathya Sai District, Andhra Pradesh</span>.
          </p>
          <p>
            I hold a <span className="text-foreground">Bachelor of Technology in Computer Science & Engineering</span> from
            <span className="text-foreground"> Vemu Institute of Technology, P. Kothakota, Chittoor</span>, completed in
            <span className="text-foreground"> 2024</span>.
          </p>
          <p>
            I bring <span className="text-foreground font-semibold">1.5+ years of hands-on professional experience</span> in
            <span className="text-foreground"> Microsoft SQL Server &amp; SSIS</span> — designing schemas, writing optimised
            stored procedures and building reliable ETL pipelines — together with
            <span className="text-foreground"> 6 months of intensive training</span> in
            <span className="text-foreground"> Python Backend Development and Web Development</span>.
          </p>
          <p>
            I take ownership end-to-end, communicate clearly with stakeholders and consistently deliver
            <span className="text-foreground"> clean, scalable and production-ready solutions</span> that businesses can trust.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl glass p-5 transition hover:-translate-y-1 hover:ring-neon"
            >
              <c.Icon className="mb-3 text-[color:var(--neon)]" size={22} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
              <p className="mt-1 font-semibold">{c.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
