import { useState } from 'react';
import { Instagram, Menu, MessageCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black shadow-md z-50  ">
      <div className="container mx-auto px-4 py-5 ">
        <nav className="flex items-center justify-between px-6">
          <div  className="text-2xl font-extrabold text-yellow-600 cursor-pointer">
           <a href="#home" className=''>TSP SALON</a> 
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Navigation Links */}
          <ul className={`${
            isMenuOpen 
              ? 'absolute top-full text-xl font-semibold left-50 outline-none right-0 items-center flex flex-col rounded-b-xl  py-7 bg-black  shadow-md md:shadow-none'
              : 'hidden'
            } md:flex md:items-center md:static md:space-x-8`}
          >
            <li><a href="#home" className="block  px-4  py-4 md:p-0 hover:text-gray-300 text-white transition-colors">Home</a></li>
            <li><a href="#about" className="block  px-4 py-4 md:p-0 hover:text-gray-300 text-white transition-colors">About</a></li>
            <li><a href="#services" className="block px-4 py-4 md:p-0 hover:text-gray-300 text-white transition-colors">Services</a></li>
            <li><a href="#team" className="block  px-4 py-4 md:p-0 hover:text-gray-300 text-white transition-colors">Our Team</a></li>
            <li><a href="#gallery" className="block  px-4 py-4 md:p-0 hover:text-gray-300 text-white transition-colors">Gallery</a></li>
            <li><a href="#testimonials" className="block  px-4 py-4 md:p-0 hover:text-gray-300 text-white transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="block  px-4 py-4 md:p-0 hover:text-gray-300 text-white transition-colors">Contact</a></li>
            <li>
            
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}