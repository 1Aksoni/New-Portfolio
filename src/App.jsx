import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/maincomponents/Header.jsx";
import HeroSection from "./components/maincomponents/HeroSection.jsx";
import SkillSection from "./components/maincomponents/SkillSection.jsx";
import ProjectSection from "./components/maincomponents/ProjectSection.jsx";
import TestimonialsSection from "./components/maincomponents/TestimonialsSection.jsx";
import ContactMeSection from "./components/maincomponents/ContactMeSection.jsx";
import FooterSection from "./components/maincomponents/FooterSection.jsx";

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="relative bg-gray-900 text-gray-200 min-h-screen">
        <Header
          heroRef={heroRef}
          skillRef={skillRef}
          projectRef={projectRef}
          testimonialsRef={testimonialsRef}
          contactRef={contactRef}
        />

        <main className="max-w-7xl mx-auto p-4 space-y-10">
          {/* Hero Section */}
          <div ref={heroRef}>
            <HeroSection />
          </div>

          {/* Skills Section */}
          <div ref={skillRef}>
            <SkillSection />
          </div>

          {/* Projects Section */}
          <div ref={projectRef}>
            <ProjectSection />
          </div>

          {/* Testimonials Section */}
          <div ref={testimonialsRef}>
            <TestimonialsSection />
          </div>

          {/* Contact Section */}
          <div ref={contactRef}>
            <ContactMeSection />
          </div>

          {/* Footer Section */}
          <FooterSection />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
