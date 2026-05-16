import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Github, PlayCircle } from "lucide-react";
import imgVoting from "@/assets/proj-voting.jpg";
import imgDb from "@/assets/proj-db.jpg";
import imgCoffee from "@/assets/proj-coffee.jpg";
import imgTravel from "@/assets/proj-travel.jpg";
import imgBooks from "@/assets/proj-books.jpg";
import imgLearn from "@/assets/proj-learn.jpg";
import { ProjectDemo, type DemoSlide } from "./ProjectDemo";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  category: "Python" | "Web" | "Database" | "Full Stack";
  image: string;
  slides: DemoSlide[];
};

const projects: Project[] = [
  {
    title: "Electronic Voting Machine",
    desc: "A secure digital voting platform that authenticates each voter using facial recognition and fingerprint biometrics before casting a vote, eliminating duplicate and proxy voting.",
    tech: ["Python", "OpenCV", "Face Recognition"],
    category: "Python",
    image: imgVoting,
    slides: [
      { accent: "Overview", title: "Secure Biometric Voting", body: "An offline-capable voting kiosk that verifies each voter with face + fingerprint before they cast a ballot, eliminating proxy and duplicate votes." },
      { accent: "Problem", title: "Identity Fraud in Manual Voting", body: "Paper and PIN-based systems leak to impersonation, ballot stuffing and slow tallying — especially in high-volume polling stations." },
      { accent: "Solution", title: "Two-Factor Biometric Gate", body: "OpenCV captures a live face frame, the face_recognition library matches it against the registered template, then a fingerprint scan confirms identity before the ballot UI unlocks.", bullets: ["Liveness check via real-time webcam frame", "128-d face embeddings stored locally", "Vote only released on dual match"] },
      { accent: "Why This Stack", title: "Python + OpenCV + face_recognition", body: "Python keeps the prototyping loop tight; OpenCV gives battle-tested image pipelines; face_recognition wraps dlib's proven ResNet model — all running on cheap hardware with no cloud dependency." },
      { accent: "Features", title: "End-to-End Polling Flow", body: "From voter check-in to encrypted result aggregation, the whole journey lives in one Python app.", bullets: ["Admin panel for voter registration", "Live audit log of every match attempt", "Encrypted SQLite ballot store", "Instant tally export"] },
      { accent: "Impact", title: "Trustworthy, Repeatable Elections", body: "Brings enterprise-grade identity assurance to small institutions, clubs and campus polls — at a fraction of the cost of commercial EVMs." },
    ],
  },
  {
    title: "Data Loading & Deduplication",
    desc: "Automated ETL pipelines that load, clean and deduplicate monthly client data across 120+ tables.",
    tech: ["SQL Server", "SSIS", "T-SQL"],
    category: "Database",
    image: imgDb,
    slides: [
      { accent: "Overview", title: "Monthly ETL, Fully Automated", body: "A scheduled SSIS + T-SQL pipeline that ingests raw client files, normalizes them and pushes clean rows into 120+ production tables every month." },
      { accent: "Problem", title: "Hours of Manual Cleanup", body: "Analysts spent days each month chasing duplicate rows, mismatched schemas and broken joins — slowing every downstream report." },
      { accent: "Solution", title: "Declarative SSIS Packages", body: "Each source gets a typed Data Flow with lookup, conditional split and merge — drift is caught at the boundary, not in the warehouse.", bullets: ["Configurable connection managers per client", "Row-level error redirection", "Idempotent loads (safe to re-run)"] },
      { accent: "Deduplication", title: "Window-Based T-SQL Dedupe", body: "ROW_NUMBER() over a business key + ranked DELETE keeps the freshest, highest-quality row and discards the rest in a single set-based pass." },
      { accent: "Why This Stack", title: "SQL Server + SSIS + T-SQL", body: "SQL Server gives ACID reliability and great indexing; SSIS visually orchestrates complex multi-source flows with built-in scheduling; T-SQL keeps heavy transforms close to the data — minimum data movement, maximum speed." },
      { accent: "Impact", title: "~85% Faster Monthly Close", body: "What used to be a multi-day manual scramble now runs unattended overnight, with a verified data quality report waiting in the morning." },
    ],
  },
  {
    title: "Coffee Shop Website",
    desc: "A modern, responsive coffee shop website with elegant menu browsing and online ordering.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image: imgCoffee,
    slides: [
      { accent: "Overview", title: "A Café That Sells Online", body: "A warm, image-led storefront that lets customers browse the menu, build an order and check out — without leaving the page." },
      { accent: "Problem", title: "Static Brochure Sites Don't Convert", body: "Most local cafés stop at hours and a phone number, losing every customer who wants to order in two taps from their phone." },
      { accent: "Solution", title: "Mobile-First Ordering UX", body: "A grid-based menu with sticky cart, smooth scroll-to-section nav, and big finger-friendly buttons designed for one-handed phone use.", bullets: ["Live cart total in the header", "Category jump-nav", "Optimized hero imagery"] },
      { accent: "Why This Stack", title: "Just HTML, CSS, JavaScript", body: "No framework means zero bundle overhead — the page loads almost instantly on 3G, ranks well on Core Web Vitals, and is trivial for the owner to host on any cheap static plan." },
      { accent: "Features", title: "Polished Brand Experience", body: "Every screen reinforces the café's identity — warm tones, custom typography, subtle motion.", bullets: ["Accessible color contrast", "Smooth CSS-only menu reveal", "Schema.org local-business markup"] },
      { accent: "Impact", title: "From Footfall-Only to Online Revenue", body: "Turns a passive web presence into an always-open ordering channel — measurable lift in orders without any backend cost." },
    ],
  },
  {
    title: "Travel Website",
    desc: "A responsive travel booking and destination showcase with rich imagery and smooth navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image: imgTravel,
    slides: [
      { accent: "Overview", title: "Inspire, Then Book", body: "A destination-first travel site that pairs cinematic imagery with a frictionless search-and-enquire flow." },
      { accent: "Problem", title: "Travel Sites Feel Like Spreadsheets", body: "Most booking pages bury the dream behind filters and forms, killing the emotional spark that drives travel decisions." },
      { accent: "Solution", title: "Story-Led Destination Cards", body: "Full-bleed hero, scroll-snap destination gallery and clean enquiry form keep the user inspired all the way to conversion.", bullets: ["Lazy-loaded high-res imagery", "Sticky enquiry CTA", "Filter chips without page reload"] },
      { accent: "Why This Stack", title: "HTML + CSS + JS Only", body: "Pixel-perfect responsive layout, instant TTFB and great LCP scores — exactly what a discovery-driven travel site needs to rank and convert." },
      { accent: "Features", title: "Built for Discovery", body: "Every interaction is designed to keep the user exploring one more destination.", bullets: ["Smooth-scroll section nav", "Image-rich destination cards", "Quote-style traveler reviews", "Mobile-first enquiry form"] },
      { accent: "Impact", title: "Higher Engagement, More Enquiries", body: "Visitors spend longer browsing destinations and the enquiry form sees real submissions — proof that emotion + speed beats feature lists." },
    ],
  },
  {
    title: "Online Book Application",
    desc: "A full-stack bookstore with user authentication, search, cart and order tracking.",
    tech: ["Python", "Flask", "SQL"],
    category: "Full Stack",
    image: imgBooks,
    slides: [
      { accent: "Overview", title: "An End-to-End Bookstore", body: "A full-stack web app where readers sign up, search the catalog, manage a cart and track every order to delivery." },
      { accent: "Problem", title: "Small Bookstores Have No Web Presence", body: "Independent shops lose customers to giant marketplaces because they can't afford complex e-commerce platforms." },
      { accent: "Solution", title: "Flask-Powered Storefront", body: "A clean MVC Flask app with session-based auth, a relational catalog and Stripe-ready checkout — deployable on any cheap VPS.", bullets: ["Hashed passwords + secure sessions", "Search by title, author, genre", "Cart persists across logins"] },
      { accent: "Why This Stack", title: "Python + Flask + SQL", body: "Python keeps business logic readable, Flask is lightweight and flexible enough for a real shop without framework lock-in, and SQL provides ACID-safe storage for orders and inventory." },
      { accent: "Features", title: "Real Commerce Workflow", body: "Every feature a real customer expects — without the cost of a SaaS platform.", bullets: ["Order history & status tracking", "Admin inventory CRUD", "Email order confirmation hook", "Mobile-responsive UI"] },
      { accent: "Impact", title: "Independent Sellers, Online", body: "Gives small bookstores a credible digital storefront at near-zero monthly cost." },
    ],
  },
  {
    title: "Learn Sphere",
    desc: "A modern e-learning and course marketplace with interactive lessons and product listings.",
    tech: ["React", "JavaScript", "APIs"],
    category: "Full Stack",
    image: imgLearn,
    slides: [
      { accent: "Overview", title: "Learning, Reimagined", body: "A modern e-learning marketplace where instructors publish courses and students enroll, track progress and buy supplementary products in one place." },
      { accent: "Problem", title: "Existing LMS Tools Feel Dated", body: "Most learning platforms look like 2010 web apps — slow, cluttered and unmotivating for today's learners." },
      { accent: "Solution", title: "Component-Driven React UI", body: "A snappy single-page experience with reusable course cards, progress rings and instant client-side filtering powered by React.", bullets: ["Reusable lesson and quiz components", "Optimistic UI for enrollment", "Skeleton loaders for perceived speed"] },
      { accent: "Why This Stack", title: "React + APIs", body: "React's component model keeps complex learning UIs maintainable; JavaScript powers rich interactivity (quizzes, progress); REST APIs cleanly separate the front-end so payments, content and analytics can each scale independently." },
      { accent: "Features", title: "End-to-End Learner Journey", body: "From discovery to certificate, every step is designed to keep learners moving forward.", bullets: ["Course catalog with smart filters", "Progress dashboard per learner", "Cart + product marketplace", "API-ready for payments & content"] },
      { accent: "Impact", title: "A Platform Learners Actually Enjoy", body: "Faster, friendlier and built to grow — Learn Sphere shows what a modern, India-ready learning product can feel like." },
    ],
  },
];

const cats = ["All", "Python", "Web", "Database", "Full Stack"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const list = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" eyebrow="Portfolio" title="Featured Projects">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === c
                ? "bg-[image:var(--gradient-hero)] text-primary-foreground shadow-neon"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-4 transition hover:-translate-y-1.5 hover:ring-neon"
            >
              <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)] opacity-0 blur-2xl transition group-hover:opacity-20" />
              <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[color:var(--neon)]">
                {p.category}
              </span>
              <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map(t => (
                  <span key={t} className="rounded-md border border-border bg-white/5 px-2 py-0.5 font-mono text-[10px]">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <a href="https://github.com/bsureshkumar005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10"><Github size={14} /> Code</a>
                <a href="#contact" className="inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-hero)] px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"><ExternalLink size={14} /> Live</a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
