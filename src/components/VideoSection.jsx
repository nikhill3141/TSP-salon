import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Experience Our Salon
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Take a virtual tour of our salon and see our expert stylists
            in action
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
        >
          <div className="relative pb-[56.25%] h-0">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
              playsInline
              preload="metadata"
              controls
              controlsList="nodownload"
            >
              <source src="https://videos.pexels.com/video-files/3996900/3996900-uhd_2732_1440_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-yellow-500 text-xl font-semibold mb-4">
            Visit Us Today
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of style, comfort, and professional
            expertise at our salon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
