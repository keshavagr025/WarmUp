import { motion, useAnimation, useCycle } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

const socialLinks = [
  { icon: FaFacebookF, url: "#" },
  { icon: FaLinkedinIn, url: "#" },
  { icon: FaTwitter, url: "#" },
  { icon: FaInstagram, url: "#" },
];

const shimmerVariants = {
  animate: {
    x: [ "-100%", "100%" ],
    transition: { 
      x: { 
        repeat: Infinity, 
        repeatType: "loop", 
        duration: 4, 
        ease: "linear" 
      } 
    }
  }
};

const Footer = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 text-white py-14 px-8"
    >
      {/* Shimmer Overlay */}
      <motion.div 
        className="absolute top-0 left-0 w-72 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        variants={shimmerVariants}
        animate={controls}
        style={{mixBlendMode: 'screen', filter: 'blur(40px)'}}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 z-10">

        {/* Thank You + Email */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-center md:text-left max-w-md"
        >
          <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-lg cursor-default">
            Thank you for visiting!
          </h2>
          <p className="mt-3 text-gray-300 text-lg md:text-xl">
            Contact us:{" "}
            <a
              href="mailto:contact@hircabs.com"
              className="relative inline-block text-pink-400 font-semibold transition-colors duration-300 hover:text-pink-600"
            >
              contact@EvRide.com
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-pink-400 rounded"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </a>
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex gap-8 z-10">
          {socialLinks.map(({ icon: Icon, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, boxShadow: "0 0 12px 3px rgba(236,72,153,0.7)" }}
              className="p-4 rounded-full bg-white/10 text-white shadow-lg shadow-black/40 cursor-pointer transition-colors duration-300 flex items-center justify-center"
              aria-label="Social link"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12 opacity-40 z-10 relative max-w-7xl mx-auto" />

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 text-center text-sm text-white/60 z-10 relative"
      >
        &copy; {new Date().getFullYear()} EvRide. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
