import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center p-10 md:p-20"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gradient bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-10 tracking-widest drop-shadow-md">
        About <span className="italic">EvRide</span>
      </h1>

      <motion.p
        className="max-w-4xl text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 px-6 md:px-0 text-center font-semibold tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        EvRide is a <span className="text-indigo-700 font-bold">cutting-edge electric transportation service</span> committed to making your commute cleaner, greener, and hassle-free. We provide <span className="text-pink-600 font-semibold">fast, eco-friendly rides</span> powered entirely by electricity, helping reduce pollution and promote sustainable urban mobility.
      </motion.p>

      <motion.div
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl p-10 max-w-3xl w-full border border-indigo-200 hover:shadow-2xl transition-shadow duration-500"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center underline decoration-pink-500 decoration-4">
          Why Choose <span className="text-pink-600">EvRide?</span>
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg md:text-xl">
          <li><strong>100% Electric Vehicles</strong> for zero emissions — cleaner air for everyone.</li>
          <li>Seamless <strong>easy booking</strong> through our sleek, user-friendly app.</li>
          <li><strong>Affordable pricing</strong> with a variety of flexible ride options.</li>
          <li>Professional & trained drivers ensuring your <strong>safety</strong> and comfort.</li>
          <li>We’re passionate about <strong>building cleaner cities</strong> and a sustainable future.</li>
        </ul>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        alt="Electric vehicle"
        className="rounded-3xl shadow-2xl mt-16 max-w-lg w-full object-cover border-8 border-indigo-300 hover:scale-105 transition-transform duration-500 cursor-pointer"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      />

      <motion.div
        className="mt-12 text-center text-indigo-700 italic font-semibold tracking-wider text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        “Drive Clean. Ride Green. Choose EvRide.”
      </motion.div>
    </motion.div>
  );
};

export default About;
