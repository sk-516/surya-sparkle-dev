import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "Java Full Stack Development", by: "KodNest Technologies Pvt. Ltd.", link: "https://share.google/XdN1TC28721VXBIff" },
  { title: "SQL Server Database Development", by: "Charvee Software Training Institute" },
  { title: "Cloud Computing", by: "NPTEL" },
];

export function Certifications() {
  return (
    <Section id="certs" eyebrow="Credentials" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:ring-neon"
          >
            <Award className="mb-4 text-[color:var(--neon)]" size={32} />
            <h3 className="font-bold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.by}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--neon-3)]">
                ✓ Verified
              </span>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-[image:var(--gradient-hero)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
                >
                  View Certificate ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
