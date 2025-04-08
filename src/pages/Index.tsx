
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-white to-brand-100 dark:from-brand-950 dark:to-brand-900/50"></div>}>
        <ThreeBackground />
      </Suspense>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
