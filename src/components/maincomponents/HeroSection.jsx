import React from "react";

function HeroSection() {
  return (
    <div>
      <section className="relative text-white py-20 px-6 lg:px-16 rounded-lg shadow-lg bg-cover bg-center transition-all duration-700 overflow-hidden mt-20">
        {" "}
        {/* Added mt-20 for margin */}
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900"></div>
        {/* Dark Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-20 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Info */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
                Welcome to My Portfolio!
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                I'm{" "}
                <span className="text-orange-400 font-semibold">
                  Akshat Soni
                </span>
                , a passionate web developer. Explore my projects and skills
                below.
              </p>
              <a
                href="/22MCMC39_AKSHATS_RESUME.pdf" // Update this to your actual resume file path
                download // This attribute prompts the browser to download the file instead of navigating to it
                className="inline-block bg-blue-600 text-white px-6 py-3 mt-6 rounded-full text-lg font-semibold tracking-wide hover:bg-orange-500 transition-colors duration-300 ease-in-out shadow-lg transform hover:scale-110"
              >
                Download Resume
              </a>
            </div>

            {/* Right Column: Profile Image and Shapes */}
            <div className="flex justify-center md:justify-end relative">
              <img
                src="/about.png"
                alt="About Me"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full transform hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg border-4 border-white"
              />
              {/* Geometric shapes */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-300 rounded-full opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
