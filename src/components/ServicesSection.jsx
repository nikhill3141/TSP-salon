import { motion } from "framer-motion";

const services = [
  {
    title: "Hair Services",
    image: "https://th.bing.com/th/id/OIP.G-PQMZwXiOpRZgof9nTAbwHaE7?rs=1&pid=ImgDetMain",
    description: "Cutting-edge haircuts, coloring, highlights, balayage, and styling for all hair types.",
  },
  {
    title: "Facial Treatments",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Customized facials, microdermabrasion, chemical peels, and anti-aging treatments.",
  },
  {
    title: "Massage Therapy",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Swedish, deep tissue, hot stone, and aromatherapy massages for relaxation.",
  },
  {
    title: "Hair Color",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Transform your look with expert hair coloring, balayage, and highlights.",
  },
  {
    title: "Makeup Application",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Get a flawless look for any occasion with our professional makeup services.",
  },
  {
    title: "Waxing Services",
    image: "https://www.kittykatwaxstudio.com/wp-content/uploads/2019/06/kitty-kat-wax-men-services.jpg",
    description: "Smooth, hair-free skin with gentle and effective waxing for face and body.",
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
