import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsinfo } from "../data/index";
import { motion } from "framer-motion"; // Importa framer-motion

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsinfo.find((proj) => proj.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="py-24 px-8 bg-black text-white">
        <h2 className="text-3xl font-bold">Proyecto no encontrado</h2>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Volver a la lista de proyectos
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-black flex flex-col items-center py-10"
      initial={{ opacity: 0, y: 20 }} // Animación de entrada
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      <div className="bg-gray-900 shadow-lg rounded-lg max-w-4xl w-full p-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
        <p className="text-gray-300 mb-6">{project.details}</p>
        
        <div className="flex justify-center mt-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            Visitar página del proyecto
          </a>
        </div>
        <Link to="/" className="text-blue-500 underline mt-8 inline-block">
          Volver a la lista de proyectos
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
