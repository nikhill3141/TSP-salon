import { FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Contact2, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-black/70 bg-blend-overlay bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your Style, Elevate Your Confidence
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          At TSP salon, we believe in bringing out your natural beauty through
          exceptional services delivered by passionate professionals.
        </p>
        <Dialog>
          <DialogTrigger>
            <a
              href="#booking"
              className="inline-block px-8 py-3 bg-yellow-700 font-semibold text-white rounded-full hover:bg-yellow-600 transition-colors"
            >
              Book Your Appointment
            </a>
          </DialogTrigger>
          <DialogContent className="bg-black border-none text-yellow-700 items-center flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-5">
                Contact with us
              </DialogTitle>
            </DialogHeader>

            <Button className="w-1/2 p-5 bg-blue-600">
            <a
              href="tel:+919518329121"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              
                <Contact2 /> Contact Us
             
            </a>
            </Button>
            <Button className="w-1/2 p-5 bg-green-700">
            <a
              href="https://wa.me/919518329121?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              
                <MessageCircle /> What's App
             
            </a>
            </Button>
            <Button className="w-1/2  p-5 bg-zinc-900">
            <a href="https://www.instagram.com/tsp_hair_and_makeup_salon/" className="flex gap-2 items-center">
             
                <FaInstagram /> Instagram
            </a>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
