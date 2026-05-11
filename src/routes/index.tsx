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
      { title: "Suresh Kumar Battala · Software Developer Portfolio" },
      { name: "description", content: "Portfolio of Suresh Kumar Battala — Python Backend Developer, Database Developer & Web Developer from Dharmavaram, Andhra Pradesh." },
      { property: "og:title", content: "Suresh Kumar Battala — Software Developer Portfolio" },
      { property: "og:description", content: "Python Backend · Database · Web Developer. Explore projects, experience and skills." },
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
