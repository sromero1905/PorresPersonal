"use client";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsinfo } from "../data/index";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { FloatingNav } from "./ui/FloatingNavbar";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsinfo.find((proj) => proj.id === parseInt(id || "0"));

  // Scroll a la parte superior al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">Proyecto no encontrado</h2>
        <Link to="/" className="text-gray-400 hover:text-gray-300 underline inline-flex items-center">
          <FiArrowLeft className="inline mr-2" />
          Volver a la lista de proyectos
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col items-center py-20 px-4 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // Transición de carga
    >
      {/* Navbar flotante */}
      <FloatingNav
        navItems={[
          { name: "Inicio", link: "/" },
          { name: "Proyectos", link: "/projects" },
          { name: "Contacto", link: "/contact" },
        ]}
      />

      {/* Contenedor principal */}
      <div className="relative w-full max-w-5xl mb-12"> {/* Aumentar max-w para mayor ancho */}
        {/* Imagen principal - Ajustes para estar menos larga y más ancha */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" // Aumentar altura a 600px
          initial={{ opacity: 0, y: 20 }} // Entrada más suave
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeInOut" }} // Transición más suave
          style={{ marginTop: '-20px' }} // Ajuste para que la imagen esté más arriba
        />
        {/* Título sobre la imagen - Mejorado */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }} // Transición más tranquila
        >
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        </motion.div>
      </div>

      {/* Sección de detalles del proyecto */}
      <div className="w-full max-w-3xl space-y-8 text-gray-300">
        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }} // Transición más suave
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Descripción</h2>
          <p className="text-lg">{project.details.detail1}</p>
        </motion.div>

        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }} // Transición más suave
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Aspectos Clave</h2>
          <p className="text-lg">{project.details.detail2}</p>
        </motion.div>
      </div>

      {/* Botón para visitar la página del proyecto */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }} // Transición más suave
        viewport={{ once: false }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
        >
          Visitar página del proyecto
        </a>
      </motion.div>

      {/* Enlace para volver a la lista de proyectos */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }} // Transición más suave
        viewport={{ once: false }}
      >
        <Link to="/" className="text-gray-400 inline-flex items-center hover:text-gray-300 transition-colors">
          <FiArrowLeft className="mr-2" />
          Volver a la lista de proyectos
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
