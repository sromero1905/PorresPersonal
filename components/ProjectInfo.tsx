// ProjectInfo.tsx
import React from 'react';
import { projectsData } from '../data/index';

const ProjectInfo = () => {
  return (
    <div className="container mx-auto p-8">
      {projectsData.map((project) => (
        <div 
          key={project.id}  // Cambiar key a project.id
          className="flex flex-col items-center text-center mb-12 transition-transform transform hover:scale-105 duration-300"
        >
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-lg text-gray-700 mb-6">{project.info}</p>
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-3/4 h-auto rounded-lg shadow-md mb-4" // Añadir margen abajo para separación
          />
          <a 
            href={`/projects/${project.id}`}  // Enlace a la página de detalles
            className="text-blue-600 underline"
          >
            Ver más detalles
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;
