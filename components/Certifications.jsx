import React from "react";

const Certifications = () => {
  return (
    <section id="certifications" className="bg-gray-100 text-gray-900 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Certifications & Achievements</h2>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">

        {/* Coursera Certificate */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-1">Excel for Data Analysis</h3>
          <p className="text-sm text-gray-600 mb-2">Issued by Coursera.org</p>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/9Y2G3NTL2W6K"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        {/* Demola Global 2021 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-1">Demola Global – 2021</h3>
          <p className="text-sm text-gray-600 mb-2">International Collaboration Project</p>
          <a
            href="https://portal.demola.net/certificates/030512754562-c5e9c4"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        {/* Demola Global 2022 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-1">Demola Global – 2022</h3>
          <p className="text-sm text-gray-600 mb-2">Innovation Challenge</p>
          <a
            href="https://portal.demola.net/certificates/034809324562-c770d8"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        {/* Academic Achievement / Volunteering */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-1">Volunteering & Sports</h3>
          <ul className="list-disc pl-4 text-gray-700 mt-2 space-y-1">
            <li>Volunteer – ESN Bragança, Portugal</li>
            <li>Runner-Up – Annual Sports Week Volleyball</li>
            <li>Participant – Inter-School Sports, Faridabad, India</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
