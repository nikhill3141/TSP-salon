import { motion } from "framer-motion";
import HairColorImg from '../assets/images/HairColorImg.jpeg';
import MakeupImg from '../assets/images/MakupImg.jpeg';
const services = [
  {
    title: "Hair Services",
    image: "https://th.bing.com/th/id/OIP.G-PQMZwXiOpRZgof9nTAbwHaE7?rs=1&pid=ImgDetMain",
    description: "Expert hair styling services including trendy haircuts, and creative Fades. Our skilled stylists ensure you leave with perfectly styled hair that suits your personality."
  },
  
  {
    title: "Facial Treatments",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Revitalize your skin with our luxurious facial treatments like lesar tretment for glowing skin and customize treatments to address your specific skin concerns. Experience glowing, healthy skin with our premium skincare services."
  },
  
  {
    title: "Hair Spa",
    image: "https://www.healthshots.com/wp-content/uploads/2020/02/hairspa.jpg",
    description: "Revive your hair with our hair spa treatments. Deep conditioning, scalp massage, and nourishing treatments to repair damage, reduce hair fall, and promote healthy growth.",
  },
  {
    title: "Hair Color",
    image: HairColorImg,  
    description: "Enhance your beauty with our premium hair coloring services. From classic shades to trendy highlights, and global colors. Our expert colorists create personalized looks that complement your style and skin tone."
  },

  {
    title: "Makeup Application",
    image: MakeupImg,
    description: "Transform your look with our professional makeup services. our skilled artists use premium products to enhance your look and create stunning results perfect for any occasion - weddings, parties, or photoshoots."
  },
  

  {
    title: "Waxing Services",
    image: "https://tadaindia.com/wp-content/uploads/2018/11/shutterstock_376197193.jpg", 
    description: "Experience gentle waxing services to get the hair free and smooth and shiny skin get red of dead skin cells and get a fresh look"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-orange=100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="text-gray-600 mt-4 mb-10 text-base sm:text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience the best treatments tailored for you.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="flex justify-center"
          >
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 backdrop-blur-lg bg-opacity-80 border border-gray-200">
              <div className="overflow-hidden rounded-t-2xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-3">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
