import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Hobbies } from "@/components/portfolio/Hobbies";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow, ScrollProgress } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surya — Suresh Kumar Battala · Software Developer Portfolio" },
      { name: "description", content: "Portfolio of Suresh Kumar Battala (Surya) — Python Backend Developer, Full Stack Developer, SQL & Automation Enthusiast based in Andhra Pradesh, India." },
      { property: "og:title", content: "Surya — Software Developer Portfolio" },
      { property: "og:description", content: "Python Backend · Full Stack · SQL Automation. Explore projects, experience, and skills." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Hobbies />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
