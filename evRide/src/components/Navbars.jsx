import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "BookRide", path: "/bookride" },
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white shadow-lg fixed w-full top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-extrabold tracking-wide cursor-pointer select-none"
          whileHover={{ scale: 1.1, color: "#93C5FD" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          EvRide
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-semibold tracking-wide text-lg">
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15, color: "#93C5FD" }}
              transition={{ duration: 0.3 }}
            >
              <Link to={item.path}>{item.name}</Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-pink-900 px-6 py-6 space-y-4"
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-semibold text-white hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
