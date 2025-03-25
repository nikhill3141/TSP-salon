import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Import all images
import gallary1 from '../assets/images/gallary1.jpeg';
import gallary2 from '../assets/images/gallary2.jpeg';
import gallary3 from '../assets/images/gallary3.jpeg';
import gallary4 from '../assets/images/gallary4.jpeg';
import gallary5 from '../assets/images/gallary5.jpeg';
import gallary6 from '../assets/images/gallary6.jpeg';
import gallary7 from '../assets/images/gallary7.jpeg';
import gallary9 from '../assets/images/gallary9.jpeg';

const galleryImages = [
  { src: gallary1, alt: "Hair Styling Work" },
  { src: gallary2, alt: "Hair Styling Work" },
  { src: gallary3, alt: "Hair Styling Work" },
  { src: gallary4, alt: "Hair Styling Work" },
  { src: gallary5, alt: "Makeup Application" },
  { src: gallary6, alt: "Makeup Application" },
  { src: gallary7, alt: "Makeup Application" },
  { src: gallary9, alt: "Makeup Application" },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const isDialogOpen = selectedImageIndex !== null;

  return (
    <section id="gallery" className="py-16 bg-gray-50 px-4 sm:px-8">
      <motion.h2
        className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Gallery
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-4 mb-10 text-base sm:text-lg text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Showcasing our beautiful work and happy clients.
      </motion.p>

      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full aspect-square object-cover rounded-lg transition-transform duration-500 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center text-sm sm:text-base">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dialog for Image Preview */}
      <Dialog open={isDialogOpen} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="flex flex-col justify-center items-center m-0 bg-transparent border-none shadow-none [&>button]:border-0 [&>button]:bg-transparent [&>button]:shadow-none [&>button]:w-14 [&>button]:h-14 [&>button]:absolute [&>button]:top-0 [&>button]:right-0 [&>button]:z-50 [&>button_svg]:w-10 [&>button_svg]:h-10 [&>button_svg]:text-white [&>button_svg]:stroke-[3] [&>button_svg]:drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
          {isDialogOpen && (
            <div className="relative w-auto max-w-[90vw] sm:max-w-[70vw]">
              <Carousel>
                <CarouselContent>
                  {galleryImages.map((image, idx) => (
                    <CarouselItem key={idx} className="flex justify-center items-center px-20">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-auto max-h-[80vh] object-contain rounded-lg"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-32 md:-left-40 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white/90" />
                <CarouselNext className="absolute -right-24 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white/90" />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
