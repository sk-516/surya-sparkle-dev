import { motion } from "framer-motion";
import { Section } from "./Section";
import { Camera, Film, Gamepad2, BookOpen, Lightbulb, Tv } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Hobby = { Icon: LucideIcon; label: string; tag: string; desc: string };

const hobbies: Hobby[] = [
  {
    Icon: Camera,
    label: "Photography",
    tag: "Frames the world",
    desc: "Street, portrait and golden-hour photography — I love composing light, mood and emotion into a single still frame.",
  },
  {
    Icon: Film,
    label: "Video Editing",
    tag: "Crafts stories",
    desc: "Cuts, color, sound design and motion in CapCut & Premiere — turning raw footage into clean, scroll-stopping reels.",
  },
  {
    Icon: Gamepad2,
    label: "Indoor Games",
    tag: "Sharp strategy",
    desc: "Chess and carrom keep my focus, patience and pattern-recognition sharp — the same muscles I use to debug code.",
  },
  {
    Icon: BookOpen,
    label: "Learning Tech",
    tag: "Always shipping",
    desc: "Daily docs, blogs and side experiments — currently leveling up on system design, SQL internals and modern React.",
  },
  {
    Icon: Lightbulb,
    label: "Creative Ideas",
    tag: "Builds & ships",
    desc: "Sketching product ideas, automating small workflows and prototyping tools that make everyday work faster.",
  },
  {
    Icon: Tv,
    label: "Tech Content",
    tag: "Stays curious",
    desc: "Long-form tech YouTube, conference talks and engineering podcasts — learning how great teams build at scale.",
  },
];

export function Hobbies() {
  return (
    <Section id="hobbies" eyebrow="Off the Clock" title="Hobbies & Interests">
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-muted-foreground sm:text-base">
        The same curiosity that drives my code also drives my time off. Hover or tap each card to flip and see the story behind it.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="hobby-flip group h-56"
            tabIndex={0}
          >
            <div className="hobby-flip-inner relative h-full w-full">
              {/* Front */}
              <div className="hobby-flip-face absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl glass p-5 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon">
                  <h.Icon size={24} />
                </div>
                <p className="text-base font-semibold">{h.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--neon)]">{h.tag}</p>
              </div>
              {/* Back */}
              <div className="hobby-flip-face hobby-flip-back absolute inset-0 flex flex-col justify-between rounded-2xl bg-[image:var(--gradient-hero)] p-5 text-left text-primary-foreground shadow-neon">
                <div className="flex items-center gap-2">
                  <h.Icon size={18} />
                  <p className="font-display text-sm font-bold uppercase tracking-wider">{h.label}</p>
                </div>
                <p className="text-sm leading-relaxed">{h.desc}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">— {h.tag}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
