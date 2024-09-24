import React from "react";
import { motion } from "framer-motion"; // Importamos framer-motion

const Grid = () => {
  // Definimos las variantes de la animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-black flex flex-col items-center py-16 w-full">
      <div className="w-full flex flex-col items-center space-y-12 px-6">

        {/* Card de Imagen Grande con animación */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} // Animación solo ocurre una vez al estar visible en el viewport
          variants={fadeInUp} // Variantes de la animación
        >
          <img 
            src="/aboutme.jpg" 
            alt="Speaker" 
            className="w-full h-auto object-cover rounded-t-2xl" // Imagen más grande
          />
        </motion.div>

        {/* Card de Texto Grande con animación */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-5xl p-16"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} // Animación solo ocurre una vez al estar visible en el viewport
          variants={fadeInUp} // Variantes de la animación
        >
          <h2 className="text-white text-4xl font-bold mb-8"> {/* Título más grande */}
            From entrepreneurship to Fortune 100
          </h2>
          <p className="text-neutral-400 text-xl leading-relaxed">
            Leveraging 25 years of experience, I've founded companies and worked at Fortune 100 companies. 
            As a hands-on technology leader, I am proud that each and every day, millions of people use products 
            I've helped to build. Today, I primarily focus on Digital Transformation projects as the world 
            increasingly looks to technology to achieve their business ambitions.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Grid;

