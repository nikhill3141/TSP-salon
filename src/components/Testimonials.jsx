import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jessica L.",
    image: "https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I've been coming to TSP Salon for three years now, and I wouldn't trust anyone else with my hair. The atmosphere is relaxing, and everyone is so professional and friendly.",
    rating: "★★★★★",
  },
  {
    name: "Emily R.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "The facial treatment I received from Emily was absolutely amazing! She analyzed my skin and created a custom treatment that addressed all my concerns. My skin has never looked better!",
    rating: "★★★★★",
  },
  {
    name: "Michael D.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I got the best haircut from TSP Salon! The stylist was very professional and understood exactly what I wanted. Highly recommended!",
    rating: "★★★★★",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-8 bg-gray-100">
      <motion.h2
        className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Client Testimonials
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-4 mb-10 text-base sm:text-lg text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What our satisfied clients have to say.
      </motion.p>

      <div className="max-w-6xl mx-auto"> {/* Increased width for desktop */}
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="flex justify-center items-center px-4">
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center text-center max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                  />
                  <p className="text-gray-700 mt-4 text-lg sm:text-xl leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-4">
                    <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-yellow-500 text-xl">{testimonial.rating}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-6 sm:left-10 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg" />
          <CarouselNext className="absolute right-6 sm:right-10 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
}
