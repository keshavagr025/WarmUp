import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbars";
import Footer from "./components/Footers";
import ChatBox from "./components/ChatBox";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import About from "./pages/About";
import Home from "./pages/Home";
import BookRide from "./pages/BookRide";
import Rewards from "./pages/Rewards";

const App = () => {
  return (
    <Router>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen flex flex-col justify-between">
        {/* baki app ka content */}

        {/* Navbar always visible */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookride" element={<BookRide />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </main>

        <Footer />

        <ChatBox />
      </div>
    </Router>
  );
};

export default App;
