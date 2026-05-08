import { motion } from "framer-motion";
import { Section } from "./Section";
import { Camera, Film, Gamepad2, BookOpen, Lightbulb, Tv } from "lucide-react";

const hobbies = [
  { Icon: Camera, label: "Photography" },
  { Icon: Film, label: "Video Editing" },
  { Icon: Gamepad2, label: "Indoor Games" },
  { Icon: BookOpen, label: "Learning Tech" },
  { Icon: Lightbulb, label: "Creative Ideas" },
  { Icon: Tv, label: "Tech Content" },
];

export function Hobbies() {
  return (
    <Section id="hobbies" eyebrow="Off the Clock" title="Hobbies & Interests">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group flex flex-col items-center gap-3 rounded-2xl glass p-5 text-center transition hover:-translate-y-1 hover:ring-neon"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon transition group-hover:scale-110">
              <h.Icon size={20} />
            </div>
            <p className="text-sm font-semibold">{h.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
