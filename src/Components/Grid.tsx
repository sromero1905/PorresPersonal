import React from "react";
import { motion } from "framer-motion"; // Importamos framer-motion
import { Link } from 'react-router-dom';

const Grid = () => {
  // Definimos las variantes de la animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-black flex flex-col items-center py-16 w-full">
      <div className="w-full flex flex-col items-center space-y-12 px-6">

        {/* Primera Card: Imagen Grande */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} // Animación solo ocurre una vez al estar visible en el viewport
          variants={fadeInUp}
        >
          <img 
            src="/aboutme.jpg" 
            alt="Speaker" 
            className="w-full h-auto object-cover rounded-t-2xl" 
          />
        </motion.div>

        {/* Segunda Card: Texto Grande */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-5xl p-8 md:p-16" // Ajuste de padding
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeInUp}
        >
          <h2 className="text-white text-4xl font-bold mb-8">
            From entrepreneurship to Fortune 100
          </h2>
          <p className="text-neutral-400 text-xl leading-relaxed mx-2"> {/* Ajuste de margen */}
            Leveraging 25 years of experience, I've founded companies and worked at Fortune 100 companies. 
            As a hands-on technology leader, I am proud that each and every day, millions of people use products 
            I've helped to build. Today, I primarily focus on Digital Transformation projects as the world 
            increasingly looks to technology to achieve their business ambitions.
          </p>
        </motion.div>

        {/* Tercera Card: Información ampliada */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-5xl p-8 md:p-24" // Ajuste de padding
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeInUp}
        >
          <h2 className="text-white text-4xl font-bold mb-8">
            Francisco Romero biography
          </h2>

          {/* Versión resumida solo para móviles */}
          <p className="text-neutral-400 text-xl leading-relaxed block md:hidden mx-2">
            Mr. Smith oversees all aspects of digital transformation, including team building, customer experience, 
            engineering, development, and product management.
          </p>

          {/* Versión completa solo para pantallas grandes */}
          <p className="text-neutral-400 text-xl leading-relaxed hidden md:block mx-2">
            Mr. Smith oversees all aspects of digital transformation, including team building, customer experience, 
            engineering, development, design, marketing technologies, and product management. His extensive experience 
            as Chief Digital Officer/Chief Experience Officer has given him a unique perspective, allowing him to lead 
            both front and back-of-house IT teams and manage data & security organizations efficiently.
          </p>

          {/* El resto del contenido para pantallas grandes */}
          <p className="text-neutral-400 text-xl leading-relaxed mt-4 hidden md:block mx-2">
            Kelly currently serves as the Chief Digital Officer at Athletic Greens, a company focused on providing 
            world-class health and wellness products.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4 hidden md:block mx-2">
            Prior to this role, Kelly was the Chief Strategy Officer of Hagerty, where he led 200 professionals in 
            IT, Digital, Data, Martech, and Security roles. During su tenure, he helped Hagerty grow its valuation 
            from nearly $1 billion to $3 billion, driving innovation across multiple platforms. This included the launch 
            of disruptive membership and marketplace services, as well as unique event platforms not seen before in the 
            automotive insurance industry.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4 hidden md:block mx-2">
            In addition to his corporate achievements, Kelly has played a vital role in advising tech startups on scaling 
            operations and building out their digital infrastructures. His hands-on approach has allowed many businesses 
            to streamline operations and stay ahead in today’s competitive market. He is also a frequent speaker at 
            industry conferences, sharing insights on digital transformation, cybersecurity, and innovative product 
            development.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4 hidden md:block mx-2">
            Kelly holds multiple certifications in cloud computing, cybersecurity, and agile methodologies. His passion 
            for continuous learning keeps him at the forefront of technology trends and emerging innovations. 
            Outside of work, Kelly is an avid car enthusiast, a hobby that aligns perfectly with his professional 
            experience in the automotive industry.
          </p>

          {/* Botón minimalista para más información */}
          <Link to="/more-info">
            <motion.button
              className="mt-8 px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              More Information
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;
