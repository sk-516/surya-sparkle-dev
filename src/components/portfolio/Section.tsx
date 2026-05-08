import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:py-28">
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="mb-3 inline-block rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="text-3xl font-bold sm:text-5xl"><span className="text-gradient">{title}</span></h2>}
        </motion.div>
      )}
      {children}
    </section>
  );
}
