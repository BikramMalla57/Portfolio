import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white px-4 text-center">
      <img
        src="/profile.png"
        alt="Bikram Malla"
        className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-lg object-cover"
      />
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Bikram Malla</h1>
      <p className="text-xl md:text-2xl mb-6 max-w-2xl">
        Master’s in IT & Project Management | Logistics & Hospitality Expert | Future Tech Leader
      </p>
      <div className="flex space-x-4">
        <a
          href="mailto:bikrammalla2057@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/bikrammalla57/"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hero;
