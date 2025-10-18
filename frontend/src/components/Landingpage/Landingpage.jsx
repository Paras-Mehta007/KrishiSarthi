import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 import bgImage from "../../assets/bpg.jpeg";

export function Landingpage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative bg-cover bg-center flex items-center justify-center"
       style={{ backgroundImage: `url(${bgImage})` }}// keep your own background image in public folder
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          🌱 Welcome to <span className="text-yellow-400">KrishiSarthi</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Smart Farming • Disease Detection • AI-powered Insights 🚀
        </p>

        <motion.button
          onClick={() => navigate("/login")}
          className="mt-8 px-8 py-4 rounded-2xl bg-yellow-400 text-black font-semibold text-lg shadow-lg hover:bg-yellow-500 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started →
        </motion.button>
      </motion.div>
    </div>
  );
}
