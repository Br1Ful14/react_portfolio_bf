import React from "react";
import { projectsData } from "../data"

const ProjectCard = ({ title, link, imgUrl, index }) => {
  return (
    <a href={link} className="w-full block shadow-2xl" key={index}>
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
      </div>
    </a>
  );
};

export const Projects = () => {
  return (
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            {projectsData.map((project, index) => (
              <ProjectCard 
                title={project.title}
                link={project.link}
                imgUrl={project.imgUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
  )
};

