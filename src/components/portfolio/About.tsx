import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, GraduationCap, MessageCircle, Brain } from "lucide-react";

const cards = [
  { Icon: MapPin, title: "Hometown", value: "Dharmavaram, Andhra Pradesh" },
  { Icon: GraduationCap, title: "University", value: "JNTUA University" },
  { Icon: MessageCircle, title: "Soft Skill", value: "Good Communication Skills" },
  { Icon: Brain, title: "Strength", value: "Strong Problem Solving Ability" },
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
          className="space-y-4 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I am <span className="text-foreground font-semibold">Suresh Kumar Battala</span>, born and raised in
            <span className="text-foreground"> Dharmavaram</span>, Andhra Pradesh. I completed my graduation in
            <span className="text-foreground"> Computer Science & Engineering</span> from
            <span className="text-foreground"> JNTUA University</span>, where I built a strong foundation in
            programming, databases and software development.
          </p>
          <p>
            I am a passionate developer with hands-on experience in
            <span className="text-foreground"> Python backend development</span>,
            <span className="text-foreground"> SQL Server automation</span> and
            <span className="text-foreground"> full-stack web applications</span>. I bring
            <span className="text-foreground"> good communication skills</span> and
            <span className="text-foreground"> strong problem-solving ability</span> to every project — focusing on
            clean, scalable and reliable solutions that deliver real value.
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
