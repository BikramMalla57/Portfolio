import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg">
          Have a project in mind, a collaboration offer, or just want to say hi?
          I'm always happy to connect!
        </p>

        <div className="space-y-4">
          <a
            href="mailto:bikrammalla2057@gmail.com"
            className="block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-semibold"
          >
            📧 bikrammalla2057@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/bikrammalla57/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded font-semibold"
          >
            🔗 Connect on LinkedIn
          </a>

          <a
            href="tel:+14692582833"
            className="block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded font-semibold"
          >
            📞 +1 (469) 258-2833
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
