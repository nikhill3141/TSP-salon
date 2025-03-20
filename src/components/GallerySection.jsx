import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Hair Styling Work" },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Hair Styling Work" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Facial Treatment" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Massage Therapy" },
  { src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Nail Art" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Makeup Application" },
  { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Salon Interior" },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Client Transformation" },
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
        <DialogContent className="flex flex-col justify-center items-center p-0 bg-transparent border-none shadow-none">
          {isDialogOpen && (
            <div className="relative w-auto max-w-[90vw] sm:max-w-[70vw]">
              <Carousel>
                <CarouselContent>
                  {galleryImages.map((image, idx) => (
                    <CarouselItem key={idx} className="flex justify-center items-center">
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
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg" />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
