import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
// import { Scissors } from 'lucide-react';
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import VideoSection from "./components/VideoSection";
import ConsultancySection from "./components/ConsultancySection";

function App() {
  return (
    <div className="relative">
      <Navbar/>
      <main className="">
        <Hero />
        <div className="p-3">
        <AboutSection/>
        </div>
        <ServicesSection/>
        <TeamSection/>
        <VideoSection/>
        <GallerySection/>
        <Testimonials/>
        
        
      </main>
      <Footer />
     
        <ConsultancySection/>
      
     
    </div>
  );
}

export default App;