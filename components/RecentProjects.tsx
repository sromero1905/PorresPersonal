"use client";

import Image from "next/image";
import { projects } from '../data/index';
import { motion } from "framer-motion"; // Importa motion

const RecentProjects = () => {
  // Define la animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-24 px-8 bg-black"> {/* Fondo negro y más espacio vertical */}
      <h1 className="text-5xl font-bold text-white text-center">
        A small selection of{" "}
        <span className="text-[#D3D3D3]">my projects</span> 
      </h1>

      {/* Grid de 2 columnas con tarjetas grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Primera tarjeta */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-96"
          key={projects[0]?.id}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }} // Sin delay
        >
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url(${projects[0]?.image})` }}>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 p-8">
            <p className="text-sm uppercase text-white opacity-70">
              {projects[0]?.status || "Previously"}
            </p>
            <h2 className="text-3xl font-bold mt-4 text-white">
              {projects[0]?.title || "Project Title"}
            </h2>
            <p className="mt-4 text-lg text-white">
              {projects[0]?.description || "Project description goes here."}
            </p>
            <div className="relative z-10 mt-6">
              <a
                href={projects[0]?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline text-lg"
              >
                {projects[0]?.linkLabel || "View Project"}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Segunda tarjeta */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-96"
          key={projects[1]?.id}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} // Delay de 0.1s
        >
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url(${projects[1]?.image})` }}>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 p-8">
            <p className="text-sm uppercase text-white opacity-70">
              {projects[1]?.status || "Currently"}
            </p>
            <h2 className="text-3xl font-bold mt-4 text-white">
              {projects[1]?.title || "Project Title"}
            </h2>
            <p className="mt-4 text-lg text-white">
              {projects[1]?.description || "Project description goes here."}
            </p>
            <div className="relative z-10 mt-6">
              <a
                href={projects[1]?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline text-lg"
              >
                {projects[1]?.linkLabel || "View Project"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tarjeta grande */}
      <motion.div
        className="relative mt-12 rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-[32rem]"
        key={projects[2]?.id}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }} // Delay de 0.2s
      >
        <div className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: `url(${projects[2]?.image})` }}>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 p-10">
          <p className="text-sm uppercase text-white opacity-70">
            {projects[2]?.status || "Previously"}
          </p>
          <h2 className="text-4xl font-bold mt-4 text-white">
            {projects[2]?.title || "Project Title"}
          </h2>
          <p className="mt-4 text-xl text-white">
            {projects[2]?.description || "Project description goes here."}
          </p>
          <div className="relative z-10 mt-8">
            <a
              href={projects[2]?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline text-xl"
            >
              {projects[2]?.linkLabel || "View Project"}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentProjects;
