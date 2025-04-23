import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 text-gray-900 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Logistics Role */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold">Logistics Specialist</h3>
          <p className="text-sm text-gray-500 mb-2">Nov 2023 – Feb 2024 · Ghent, Belgium</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Oversaw daily warehouse operations with a focus on inventory and machinery.</li>
            <li>Worked extensively with SAP Orders and Excel for data analysis.</li>
            <li>Gained hands-on experience with Power BI.</li>
            <li>Committed to continuous improvement in logistics efficiency.</li>
          </ul>
        </div>

        {/* Hospitality Roles */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold">Hospitality & Customer Service</h3>
          <p className="text-sm text-gray-500 mb-2">4+ Years · Portugal, Poland, Belgium</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Worked as waiter, bartender, and delivery staff across 5 restaurants.</li>
            <li>Provided excellent customer service in fast-paced environments.</li>
            <li>Adapted quickly to new teams and diverse cultural settings.</li>
            <li>Strengthened communication and multitasking skills.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
