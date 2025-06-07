import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <motion.p
          whileHover={{ scale: 1.05, color: "#93C5FD" }}
          className="text-sm sm:text-base font-light tracking-wide"
        >
          &copy; {new Date().getFullYear()} Hir CABS. All rights reserved.
        </motion.p>

        <motion.div
          className="flex gap-10 text-sm sm:text-base font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {["About", "Contact", "Privacy"].map((item, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.2, color: "#93C5FD" }}
              href="#"
              className="transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.3, color: "#93C5FD" }}
                href="#"
                className="cursor-pointer transition-colors"
                aria-label="Social Link"
              >
                <Icon />
              </motion.a>
            )
          )}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
