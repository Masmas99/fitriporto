import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Certificates from "@/sections/Certificates";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar brand={profile.firstName} />
      <main id="main" className="page">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer name={profile.fullName} />
      <RevealOnScroll />
    </>
  );
}
