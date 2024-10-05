import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

function FooterSection() {
  const achievements = [
    "Secured an All-India Rank of 746 in the NIT MCA Common Entrance Test (NIMCET).",
    "Achieved a remarkable 99.98 percentile in the Maharashtra Common Entrance Test (MAH-CET)",
    "Received an award from the former Chief Minister of Madhya Pradesh for academic achievement. ",
    "Awarded first prize in the Vaidik Math competition.",
    "Completed a web development bootcamp.",
    "Built and deployed a full-stack application.",
    
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/akshat-soni-7b0831247/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://github.com/1Aksoni", icon: <FaGithub />, label: "GitHub" },
    { href: "https://wa.me/8120722604", icon: <FaWhatsapp />, label: "WhatsApp" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaTelegram />, label: "Telegram" },
  ];

  return (
    <footer className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <ul className="list-disc pl-6 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Connect with me!</h3>
      <div className="flex space-x-6 mt-4">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-2xl transition-shadow hover:shadow-lg hover:scale-110">
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default FooterSection;
