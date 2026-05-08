import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, Instagram } from "lucide-react";

const links = [["Home","home"],["About","about"],["Projects","projects"],["Contact","contact"]];

function ThankYou() {
  const text = "Thank You for Visiting My Website";
  const [t, setT] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      if (!del) {
        setT(text.slice(0, t.length + 1));
        if (t.length + 1 === text.length) setTimeout(() => setDel(true), 2000);
      } else {
        setT(text.slice(0, t.length - 1));
        if (t.length - 1 === 0) setDel(false);
      }
    }, del ? 35 : 75);
    return () => clearTimeout(id);
  }, [t, del]);
  return (
    <p className="text-center font-display text-2xl sm:text-4xl">
      <span className="text-gradient-hero">{t}</span>
      <span className="caret" />
    </p>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-[image:var(--gradient-hero)]" />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12">
          <ThankYou />
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon">S</span>
              <span className="text-gradient">Surya</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Crafting backends, automations & full-stack experiences from Andhra Pradesh, India.</p>
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
            <div className="flex gap-2">
              {[
                { Icon: Github, href: "https://github.com/bsureshkumar005" },
                { Icon: Linkedin, href: "https://linkedin.com/in/b-suresh-kumar-b08101312" },
                { Icon: Instagram, href: "#" },
                { Icon: Mail, href: "mailto:bsureshkumarcse@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass text-muted-foreground transition hover:-translate-y-1 hover:text-foreground hover:ring-neon">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Surya. Designed & Developed by <span className="text-gradient">Surya</span>.</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 transition hover:ring-neon">
            <ArrowUp size={14} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
