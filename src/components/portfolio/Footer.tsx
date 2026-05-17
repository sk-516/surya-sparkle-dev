import { ArrowUp, Github, Linkedin, Mail, Instagram, Facebook, Briefcase, Download, MapPin, Phone, Sparkles } from "lucide-react";

const links = [["Home","home"],["About","about"],["Projects","projects"],["Contact","contact"]];

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-[image:var(--gradient-hero)]" />
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hire CTA banner */}
        <div className="relative mb-14 overflow-hidden rounded-3xl glass-strong p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[image:var(--gradient-hero)] opacity-20 blur-3xl" />
          <div className="relative grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[color:var(--neon)]">
                <Sparkles size={12} /> Available for Hire · Immediate Joiner
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Let's build something <span className="text-gradient-hero">reliable, scalable</span> and a little bit magical.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                I bring ownership, clear communication and a delivery-first mindset to every team. If you're hiring for a
                <span className="text-foreground"> Python backend, database or full-stack</span> role — let's talk.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition hover:scale-[1.02]">
                <Briefcase size={16} /> Hire Me
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:bg-white/10 hover:ring-neon">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-9 place-items-center rounded-lg bg-[image:var(--gradient-hero)] px-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-neon">Portfolio</span>
              <span className="text-gradient">Suresh Kumar Battala</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Computer Science Engineer & Software Developer — building backends, databases and full-stack experiences that teams can trust.</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-[color:var(--neon)]" /><span>Dharmavaram, Andhra Pradesh</span></li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-[color:var(--neon)]" /><span>bsureshkumarcse@gmail.com</span></li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-[color:var(--neon)]" /><span>Remote · Hybrid · Onsite — all modes welcome</span></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {links.map(([l, h]) => (
                <li key={h}><a href={`#${h}`} className="text-muted-foreground transition hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">Connect</h4>
            <a
              href="https://instagram.com/wordsorcererx"
              target="_blank"
              rel="noreferrer"
              className="mb-4 flex items-center gap-3 rounded-xl glass p-3 transition hover:-translate-y-0.5 hover:ring-neon"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon">
                <Instagram size={18} />
              </span>
              <span>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Follow on Instagram</p>
                <p className="text-sm font-semibold">@wordsorcererx</p>
              </span>
            </a>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: Github, href: "https://github.com/bsureshkumar005", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/b-suresh-kumar-b08101312", label: "LinkedIn" },
                { Icon: Facebook, href: "https://facebook.com/sureshkumar.battala", label: "Facebook" },
                { Icon: Mail, href: "mailto:bsureshkumarcse@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} aria-label={label} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition hover:-translate-y-1 hover:text-foreground hover:ring-neon">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Suresh Kumar Battala. Crafted with care, shipped with conviction.</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 transition hover:ring-neon">
            <ArrowUp size={14} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
