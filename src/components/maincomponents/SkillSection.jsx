import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDocker,
  FaGit,
  FaGithub,
  // FaEnvelope,
} from "react-icons/fa";

function SkillSection() {
  const skills = [
    { icon: <FaHtml5 />, label: "HTML", color: "bg-red-600" },
    { icon: <FaCss3Alt />, label: "CSS", color: "bg-blue-600" },
    { icon: <FaJsSquare />, label: "JavaScript", color: "bg-yellow-600" },
    { icon: <FaReact />, label: "React.js", color: "bg-cyan-600" },
    { icon: <FaNodeJs />, label: "Node.js", color: "bg-green-600" },
    { icon: <FaDatabase />, label: "MongoDB", color: "bg-green-500" },
    { icon: <FaBootstrap />, label: "Bootstrap", color: "bg-purple-600" },
    { icon: <FaDocker />, label: "Docker", color: "bg-indigo-600" },
    { icon: <FaGit />, label: "Git", color: "bg-gray-600" },
    { icon: <FaGithub />, label: "GitHub", color: "bg-gray-500" },
    // { icon: <FaEnvelope />, label: "Contact", color: "bg-orange-600" },
  ];

  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg mt-8">
      <h2 className="text-4xl font-bold text-center text-white mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg relative overflow-hidden group hover:shadow-xl transform hover:scale-105`}
          >
            <div
              className={`flex items-center justify-center h-20 w-20 rounded-full ${skill.color} transition-transform duration-300 ease-in-out animate-slideIn hover:wobble`}
            >
              <div className="text-4xl text-white">{skill.icon}</div>
            </div>
            <span className="mt-4 text-lg font-semibold text-white">{skill.label}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wobble {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }

        .hover\:wobble:hover {
          animation: wobble 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default SkillSection;
