import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsinfo } from "../data/index";
import { motion } from "framer-motion"; // Importa framer-motion
import { FiArrowLeft } from "react-icons/fi"; // Importa un ícono de flecha

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsinfo.find((proj) => proj.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="py-24 px-8 bg-black text-white">
        <h2 className="text-3xl font-bold">Proyecto no encontrado</h2>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          <FiArrowLeft className="inline mr-2" />
          Volver a la lista de proyectos
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 flex flex-col items-center py-12"
      initial={{ opacity: 0, y: 20 }} // Animación de entrada
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      <div className="bg-gray-800 shadow-xl rounded-lg max-w-3xl w-full p-8 space-y-6"> {/* Agregado space-y-6 */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg"
          initial={{ opacity: 0 }} // Animación para la imagen
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }} // Retardo para una entrada más suave
        />
        <h1 className="text-4xl font-semibold text-white">{project.title}</h1>

        <div className="details space-y-6">
          <div className="detail1">
            <h2 className="text-xl font-semibold text-white">Descripción</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{project.details.detail1}</p>
          </div>
          <div className="detail2">
            <h2 className="text-xl font-semibold text-white">Aspectos Clave</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{project.details.detail2}</p>
          </div>
        </div>

        <div className="flex justify-center mb-6"> {/* Margen inferior agregado */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-10 rounded-full transition-all duration-300 ease-in-out shadow-lg"
          >
            Visitar página del proyecto
          </a>
        </div>

        <Link to="/" className="text-blue-400 inline-flex items-center hover:text-blue-500 transition-colors">
          <FiArrowLeft className="mr-2" />
          Volver a la lista de proyectos
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
