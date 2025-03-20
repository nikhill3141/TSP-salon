import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import { Scissors } from 'lucide-react';
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";


function App() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <main className="">
        <Hero />
        <div className="p-3">
        <AboutSection/>
        </div>
        <ServicesSection/>
        <TeamSection/>
        <GallerySection/>
        <Testimonials/>
        
        
        
      </main>
      <Footer />
     
      
      {/* Floating Booking Button */}
      <a 
        href="#booking" 
        className="fixed bottom-8 right-8 bg-zinc-800 hover:bg-zinc-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 z-50"
      >
        <Scissors className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;