import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", name, email, message);
    // Submit form data here
  };

  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-500 font-semibold tracking-wide uppercase">
            Contact Jaseunda
          </h2>
          <p className="mt-1 text-4xl sm:text-5xl font-extrabold text-white">
            Get In Touch
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
            Have any queries? Fill out the form below and we will get in touch!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-gray-900"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-gray-900"
                placeholder="Type your message here"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-block py-4 px-8 leading-none text-white text-xl bg-indigo-500 hover:bg-indigo-600 rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;