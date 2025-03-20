import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        
        {/* Left Section - Salon Info & Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-xl font-bold tracking-wide">TSP Salon</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Our Goal is to Elevate your looks through our Experties!
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Section - Google Map */}
        
        <div className="w-full md:w-80 h-48 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Salon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0230915490065!2d74.52317727517473!3d20.5462360809851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde99cae3be86a7%3A0xd7a2629435a326e3!2sTsp%20hair%20and%20makeup%20salon!5e0!3m2!1sen!2sin!4v1742407485160!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} TSP Salon. All Rights Reserved.
      </div>
      
      <a href="https://www.instagram.com/nikhilmali3141/" className="flex items-center gap-2 mt-2 justify-center text-sm font-light" ><FaDev /> Devloped by Nikhil</a>
     

    </footer>
  );
}
