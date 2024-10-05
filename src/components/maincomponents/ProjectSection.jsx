import React from 'react';
import { ThreeDCardDemo } from "../elements/card.jsx"; 

const Projects = [
  {
    title: "HeavenHub",
    description: "A platform to buy and rent properties seamlessly and efficiently.",
    image: "./Project_images/HevenHub/HomePage.png",
    link: "https://heven-hub-frontend.vercel.app/",
    githubLink: "https://github.com/1Aksoni/HeavenHub", // Add your GitHub link here
  },
  {
    title: "Grosify Landing Page",
    description: "A simple landing page for a grocery shopping web app.",
    image: "./Project_images/Grosify_Landing_page/Home.png",
    link: "https://grocify-landing-page.vercel.app/",
    githubLink: "https://github.com/1Aksoni/Grocify_Landing_Page", // Add your GitHub link here
  },
  {
    title: "MiniTube",
    description: "This project implements a video controller for managing video uploads and interactions in a video-sharing application.",
    image: "./Project_images/MiniTube/image.png",
    link: "https://github.com/1Aksoni/MiniYoutube",
    githubLink: "https://github.com/1Aksoni/MiniYoutube", // Add your GitHub link here
  },
  {
    title: "Speech Web Corpus",
    description: "An interface for managing and analyzing speech data.",
    image: "./Project_images/SpeechApp/image.png",
    link: "https://github.com/1Aksoni/Speech-Web_App",
    githubLink: "https://github.com/1Aksoni/Speech-Web_App", // Add your GitHub link here
  },
  {
    title: "Weather App",
    description: "A simple real-time weather application that shows temperature, wind speed, and humidity for a particular city.",
    image: "./Project_images/WeatherApp/MainBox.png",
    link: "https://weather-app1-puce.vercel.app/",
    githubLink: "https://github.com/1Aksoni/Weather_app1", // Add your GitHub link here
  },
  ,
  {
    title: "Custom Git",
    description: "his project is a custom implementation of core Git functionality.",
    image: "./Project_images/Custom-Git/image.png",
    link: "https://github.com/1Aksoni/Custom-Git",
    githubLink: "https://github.com/1Aksoni/Custom-Git", // Add your GitHub link here
  },
];


function ProjectSection() {
  return (
    <div>
      <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over the Projects array to create a unique card for each project */}
          {Projects.map((project, index) => (
            <ThreeDCardDemo key={index} project={project} /> // Pass the project data as props
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectSection;
