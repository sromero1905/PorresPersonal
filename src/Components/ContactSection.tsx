import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const checkVisibility = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0; // Verificar si está parcialmente visible
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Para comprobar la visibilidad al cargar

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  // Definimos las variantes de animación para los elementos
  const fadeInUp = (delay: number) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" }, // Reducido a 0.8
    },
  });

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-8 md:px-16 lg:px-32 flex flex-col items-center"
    >
      {/* Sección del título y la imagen */}
      <motion.div
        className="flex items-center space-x-4 mb-12"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(0.5)}
      >
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover"
        />
        <h1 className="text-6xl font-semibold leading-tight">
          Let’s work together
        </h1>
      </motion.div>

      {/* Línea divisora */}
      <motion.hr
        className="w-full max-w-3xl my-12 border-gray-700"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(1)}
      />

      {/* Sección de información de contacto */}
      <motion.div
        className="flex space-x-8 mb-12"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(1.5)}
      >
        <div className="flex items-center bg-gray-800 px-8 py-4 rounded-full shadow-md transition transform hover:scale-105 hover:-translate-y-0.25 duration-500 ease-in-out">
          <span className="text-lg">info@dennissnellenberg.com</span>
        </div>
        <div className="flex items-center bg-gray-800 px-8 py-4 rounded-full shadow-md transition transform hover:scale-105 hover:-translate-y-0.25 duration-500 ease-in-out">
          <span className="text-lg">+31 6 27 84 74 30</span>
        </div>
      </motion.div>

      {/* Botón de contacto */}
      <motion.div
        className="relative"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(2)}
      >
        <button className="relative group overflow-hidden bg-white text-black border border-gray-400 rounded-full py-5 px-12 text-lg font-semibold shadow-lg">
          {/* Efecto de fondo que se expande */}
          <span className="absolute inset-0 w-full h-full bg-black transform scale-0 transition-transform duration-500 ease-in-out origin-center group-hover:scale-150"></span>
          {/* Texto del botón */}
          <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">Get in touch</span>
          {/* Icono */}
          <FiArrowUpRight className="absolute top-1/2 transform -translate-y-1/2 right-[-40px] text-black text-2xl transition-colors duration-500 ease-in-out group-hover:text-white" />
        </button>
      </motion.div>
    </section>
  );
};

export default ContactSection;
