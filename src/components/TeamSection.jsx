import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Piyush",
    role: "Makeup Artist",
    image: "https://th.bing.com/th/id/OIP.CRJqLVAgLwQL-3KdP8Cz6AHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "A celebrity makeup artist withspecializing in bridal, glam, and natural makeup techniques.",
  },
  {
    id: 2,
    name: "Tanmay",
    role: "Hair Specialist",
    image: "https://th.bing.com/th/id/OIP.fk40Tf4GqLFw13TUHjzQiwAAAA?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Expert in modern cuts, balayage, and hair transformations with a passion for hairstyling.",
  },

];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-4 sm:px-8">
      <motion.h2 
        className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Experts
      </motion.h2>
      <motion.p 
        className="text-gray-600 mt-4 mb-10 text-base sm:text-lg text-center max-w-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our skilled professionals are here to bring out your best look with expertise and creativity.
      </motion.p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.id} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="flex flex-col items-center"
          >
            {/* Larger Floating Profile Image */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-yellow-200 shadow-lg -mb-16 z-10 bg-white">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card with Text Content */}
            <Card className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[300px] sm:max-w-[340px] hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 backdrop-blur-lg bg-opacity-80 border border-gray-200 pt-20 text-center">
              <CardContent className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-yellow-700 text-lg font-medium">{member.role}</p>
                <p className="text-gray-600  mt-2">{member.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
