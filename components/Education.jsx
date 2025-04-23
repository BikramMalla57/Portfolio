import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>

      <div className="max-w-5xl mx-auto space-y-8">

        {/* Cumberland University */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Cumberland University</h3>
          <p className="text-sm text-gray-500">Ongoing – Lebanon, Tennessee, USA</p>
          <p className="text-gray-700 mt-1">Master's Degree in Information Technology and Project Management</p>
        </div>

        {/* IPB Portugal */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Instituto Politécnico de Bragança (IPB)</h3>
          <p className="text-sm text-gray-500">2019 – 2023 · Portugal</p>
          <p className="text-gray-700 mt-1">Bachelor’s Degree in International Business Management – Europe</p>
        </div>

        {/* Masaryk University */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Masaryk University</h3>
          <p className="text-sm text-gray-500">2021 – Erasmus Exchange · Brno, Czech Republic</p>
          <p className="text-gray-700 mt-1">Participated in Erasmus+ Study Mobility Program under BBA</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
