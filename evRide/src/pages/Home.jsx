import React from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "⚡", title: "100% Electric", desc: "Zero emissions for a cleaner planet." },
  { icon: "💰", title: "Affordable Pricing", desc: "Rides that don’t break your wallet." },
  { icon: "📱", title: "Easy Booking", desc: "Book your ride quickly via our app." },
  { icon: "👨‍✈️", title: "Professional Drivers", desc: "Safe and courteous rides every time." },
  { icon: "🌍", title: "Eco-Friendly", desc: "Supporting sustainable urban transport." },
];

const howItWorksSteps = [
  "Download the EvRide app.",
  "Choose your pickup and destination.",
  "Enjoy a safe, clean ride.",
  "Reach your destination happily.",
];

const testimonials = [
  {
    name: "Rohit Sharma",
    text: "EvRide has transformed my daily commute. Clean, fast, and reliable!",
  },
  {
    name: "Neha Singh",
    text: "I love that it’s electric and affordable. Great service!",
  },
  {
    name: "Amit Patel",
    text: "Easy to use app and friendly drivers. Highly recommend EvRide.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">
          Ride the Future with <span className="text-indigo-600">EvRide</span>
        </h1>
        <p className="text-xl text-indigo-700 mb-8">
          Clean, fast, and affordable electric rides for a greener tomorrow.
        </p>
        <div className="space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded font-semibold shadow-lg transition">
            Book a Ride
          </button>
          <button className="border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-600 px-8 py-3 rounded font-semibold transition">
            Download App
          </button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10 text-center">
          Why Choose EvRide?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-indigo-600 text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-indigo-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10 text-center">
          How It Works
        </h2>
        <ol className="max-w-3xl mx-auto space-y-6 text-indigo-800 list-decimal list-inside text-lg">
          {howItWorksSteps.map((step, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * idx }}
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10 text-center">
          What Our Riders Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, text }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-indigo-900"
            >
              <p className="italic mb-4">"{text}"</p>
              <h4 className="font-semibold text-indigo-700">{name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-indigo-600 py-12 px-6 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Ride with EvRide?</h2>
        <button className="bg-white text-indigo-600 px-10 py-3 rounded font-semibold shadow hover:bg-gray-100 transition">
          Book Your Ride Now
        </button>
      </motion.section>

      {/* Download App Section */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6">Get the EvRide App</h3>
        <p className="text-indigo-700 mb-8 max-w-xl mx-auto">
          Download our app to book rides easily and enjoy a seamless electric ride experience.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition"
          >
            Play Store
          </a>
          <a
            href="#"
            className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transition"
          >
            App Store
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
