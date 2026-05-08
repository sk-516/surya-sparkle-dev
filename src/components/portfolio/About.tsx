import { motion } from "framer-motion";
import { Section } from "./Section";
import { Cake, Globe, Sparkles, Heart } from "lucide-react";

const cards = [
  { Icon: Cake, title: "Date of Birth", value: "15 May 2003" },
  { Icon: Heart, title: "Religion", value: "Hindu" },
  { Icon: Globe, title: "Languages", value: "English · Telugu · Hindi" },
  { Icon: Sparkles, title: "Interests", value: "Photography · Editing · Tech" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who I Am">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          I'm a passionate <span className="text-foreground">Computer Science graduate</span> with hands-on experience in
          <span className="text-foreground"> Python backend development</span>,
          <span className="text-foreground"> SQL Server automation</span>, and
          <span className="text-foreground"> web application development</span>.
          I enjoy building scalable applications, automating workflows, and solving real-world problems
          using technology. I continuously learn new technologies and love creating innovative digital experiences.
        </motion.p>
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
