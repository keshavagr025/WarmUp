import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-indigo-300"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-700 tracking-wide">
          Welcome Back
        </h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-red-700 bg-red-100 border border-red-300 rounded-lg px-4 py-3 font-semibold text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-indigo-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-indigo-300 rounded-lg px-5 py-3 text-gray-700 placeholder-indigo-400
                focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 font-semibold text-indigo-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-indigo-300 rounded-lg px-5 py-3 text-gray-700 placeholder-indigo-400
                focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 transition"
              required
              minLength={6}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white font-extrabold py-3 rounded-xl shadow-lg hover:shadow-xl
              transition transform hover:-translate-y-1 duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-indigo-700 font-medium">
          Don't have an account?{" "}
          <a href="/signup" className="text-pink-600 hover:underline font-bold">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
