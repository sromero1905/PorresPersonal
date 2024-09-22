"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Optimización de imagen en Next.js

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Capa oscura sobre la imagen */}
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        
        {/* Imagen fija */}
        <div className="relative z-10 w-auto h-auto">
          <Image
            src="/backend.jpg" // Ruta correcta para tu imagen
            alt="Kelly Smith"
            width={1800} // Ajusta el ancho según tus necesidades
            height={600} // Ajusta la altura según tus necesidades
            className="object-cover filter brightness-65"
          />
        </div>
      </div>

      {/* Animaciones para las letras optimizadas */}
      <motion.div 
        className="relative z-20 mt-56" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} // Animación más rápida
      >
        <motion.h1
          className="text-white text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} // Con un pequeño retraso
        >
          Hello, I'm Francisco Romero.
        </motion.h1>
        <motion.p
          className="text-gray-400 text-xl mt-4"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Mayor retraso para el subtítulo
        >
          I am the former Head of Digital at Starbucks, Athletic Greens and MGM Resorts.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
