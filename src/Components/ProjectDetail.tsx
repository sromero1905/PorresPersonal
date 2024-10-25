"use client";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsinfo } from "../lib/data/index";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { FloatingNav } from "./ui/FloatingNavbar";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsinfo.find((proj) => proj.id === parseInt(id || "0"));
  
  // Estado para manejar el tamaño de la pantalla
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Función para actualizar el estado del tamaño de la pantalla
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Scroll a la parte superior al cargar el componente
    window.scrollTo(0, 0);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">Proyecto no encontrado</h2>
        <Link
          to="/"
          className="text-gray-400 hover:text-gray-300 underline inline-flex items-center"
        >
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
      transition={{ duration: 1, ease: "easeInOut" }}
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
      <div className="relative w-full max-w-5xl mb-12">
        {/* Imagen principal */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }} // Movimiento más sutil
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        {/* Título sobre la imagen */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        </motion.div>
      </div>

      {/* Sección de detalles del proyecto */}
      <div className="w-full max-w-3xl space-y-8 text-gray-300">
        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Descripción</h2>
          <p className="text-lg">{isMobile ? project.details.detail1.mobile : project.details.detail1.full}</p>
        </motion.div>

        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Aspectos Clave</h2>
          <p className="text-lg">{isMobile ? project.details.detail2.mobile : project.details.detail2.full}</p>
        </motion.div>

        {/* Nueva sección para detail3 */}
        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Conclusiones</h2>
          <p className="text-lg">{isMobile ? project.details.detail3.mobile : project.details.detail3.full}</p>
        </motion.div>
      </div>

      {/* Imagen adicional */}
      {project.additionalImage && (
        <motion.div
          className="w-full max-w-5xl mt-12 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={project.additionalImage}
            alt={`Imagen adicional de ${project.title}`}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;
