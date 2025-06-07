import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbars";
import Footer from "./components/Footers";

// Pages import karo
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import About from "./pages/About";
import Home from "./pages/Home";
 import BookRide from "./pages/BookRide";



//const BookRide = () => <h2 className="text-center mt-10 text-3xl">BookRide Page</h2>;
//const Signup = () => <h2 className="text-center mt-10 text-3xl">Signup Page</h2>;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-800">
        <Navbar />

        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookride" element={<BookRide />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
