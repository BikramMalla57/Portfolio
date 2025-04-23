import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Bikram</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#education" className="hover:text-blue-400 transition">Education</a>
          <a href="#certifications" className="hover:text-blue-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
