import React, { useState } from "react";
import { motion } from "framer-motion";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.name}! Your account has been created.`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-300 via-pink-200 to-indigo-200 px-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl border border-indigo-300 max-w-md w-full p-10"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 tracking-wide">
          Create Your Account
        </h2>

        <label className="block mb-2 font-semibold text-indigo-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="w-full p-4 border border-indigo-300 rounded-lg mb-6
            text-gray-700 placeholder-indigo-400
            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition"
          autoComplete="name"
        />

        <label className="block mb-2 font-semibold text-indigo-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="w-full p-4 border border-indigo-300 rounded-lg mb-6
            text-gray-700 placeholder-indigo-400
            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition"
          autoComplete="email"
        />

        <label className="block mb-2 font-semibold text-indigo-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Create a password"
          className="w-full p-4 border border-indigo-300 rounded-lg mb-8
            text-gray-700 placeholder-indigo-400
            focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition"
          autoComplete="new-password"
          minLength={6}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600
            text-white font-extrabold py-4 rounded-xl shadow-lg
            hover:shadow-xl hover:scale-105 transform transition duration-300"
        >
          Sign Up
        </button>

        <p className="mt-10 text-center text-indigo-700 font-medium">
          Already have an account?{" "}
          <a href="/login" className="text-pink-600 hover:underline font-bold">
            Log in
          </a>
        </p>
      </motion.form>
    </div>
  );
};

export default SignUp;
