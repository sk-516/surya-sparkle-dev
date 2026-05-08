import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Facebook, Ghost } from "lucide-react";

const contacts = [
  { Icon: Mail, label: "Email", value: "bsureshkumarcse@gmail.com", href: "mailto:bsureshkumarcse@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 8125867018", href: "tel:+918125867018" },
  { Icon: MapPin, label: "Location", value: "Andhra Pradesh, India", href: "#" },
];

const socials = [
  { Icon: Linkedin, href: "https://linkedin.com/in/b-suresh-kumar-b08101312", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/bsureshkumar005", label: "GitHub" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Ghost, href: "#", label: "Snapchat" },
  { Icon: Mail, href: "mailto:bsureshkumarcse@gmail.com", label: "Gmail" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Let's Talk" title="Get In Touch">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:ring-neon"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon">
                <c.Icon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="font-semibold">{c.value}</p>
              </div>
            </motion.a>
          ))}
          <div>
            <p className="mb-3 mt-6 text-xs uppercase tracking-wider text-muted-foreground">Connect on</p>
            <div className="flex flex-wrap gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl glass text-muted-foreground transition hover:-translate-y-1 hover:text-foreground hover:ring-neon"
                >
                  <s.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); (e.target as HTMLFormElement).reset(); }}
          className="relative overflow-hidden rounded-2xl glass-strong p-6 sm:p-8"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
          <div className="grid gap-4">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input required name="name" className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 outline-none transition focus:border-[color:var(--neon)] focus:ring-2 focus:ring-[color:var(--neon)]/30" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input required type="email" name="email" className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 outline-none transition focus:border-[color:var(--neon)] focus:ring-2 focus:ring-[color:var(--neon)]/30" placeholder="you@email.com" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required name="message" rows={5} className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 outline-none transition focus:border-[color:var(--neon)] focus:ring-2 focus:ring-[color:var(--neon)]/30" placeholder="Tell me about your project..." />
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[image:var(--gradient-hero)] px-6 py-3 font-semibold text-primary-foreground shadow-neon transition hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-full" />
              {sent ? "Message Sent ✓" : (<><Send size={18} /> Send Message</>)}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
