import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-50 flex flex-col items-center p-8"
    >
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-6 tracking-wide">
        About EvRide
      </h1>

      <motion.p
        className="max-w-4xl text-lg text-gray-700 leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        EvRide is a cutting-edge electric transportation service committed to
        making your commute cleaner, greener, and hassle-free. We provide
        fast, eco-friendly rides powered entirely by electricity, helping
        reduce pollution and promote sustainable urban mobility.
      </motion.p>

      <motion.div
        className="bg-indigo-100 rounded-lg shadow-lg p-6 max-w-3xl w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
          Why Choose EvRide?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>100% Electric Vehicles for zero emissions.</li>
          <li>Easy booking through our user-friendly app.</li>
          <li>Affordable pricing with various ride options.</li>
          <li>Professional and trained drivers ensuring your safety.</li>
          <li>Supporting cleaner cities and a sustainable future.</li>
        </ul>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        alt="Electric vehicle"
        className="rounded-xl shadow-lg mt-12 max-w-md w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      />
    </motion.div>
  );
};

export default About;
