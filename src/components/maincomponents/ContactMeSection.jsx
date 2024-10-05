import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMeSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Use name instead of id
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update state using name
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS (mockup)
    console.log("Form Submitted: ", formData); // Check if form data is collected properly
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div>
      <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
        {submitted && (
          <div className="mb-4 text-green-500 font-bold">
            Your message has been sent! Thank you!
          </div>
        )}
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-200"
              id="name"
              name="name" // Use name attribute for EmailJS
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-200" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-200"
              id="email"
              name="email" // Use name attribute for EmailJS
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-200" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-200"
              id="message"
              name="message" // Use name attribute for EmailJS
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactMeSection;
