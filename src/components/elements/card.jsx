import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3D-Card.jsx";
import { Link } from "react-router-dom";

export function ThreeDCardDemo({ project }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border"
        style={{ maxWidth: "300px" }}
      >
        <CardItem
          translateZ={50}
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={project.image}
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={project.title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10 sm:mt-16">
          <CardItem
            translateZ={20}
            as={Link}
            to={project.link}
            target="_blank"
            className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white"
          >
            View Project →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => window.open(project.githubLink, "_blank")}
            className="px-3 sm:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
          >
            Check GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
