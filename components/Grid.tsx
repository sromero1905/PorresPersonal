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
      

          {/* Segunda Card: Texto Grande */}
          <motion.div 
            className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-5xl p-16"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={fadeInUp}
          >
            <h2 className="text-white text-4xl font-bold mb-8">
              From entrepreneurship to Fortune 100
            </h2>
            <p className="text-neutral-400 text-xl leading-relaxed">
              Leveraging 25 years of experience, I've founded companies and worked at Fortune 100 companies. 
              As a hands-on technology leader, I am proud that each and every day, millions of people use products 
              I've helped to build. Today, I primarily focus on Digital Transformation projects as the world 
              increasingly looks to technology to achieve their business ambitions.
            </p>
          </motion.div>

        {/* Tercera Card: Información ampliada */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-5xl p-24" // Card con más padding y más contenido
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeInUp}
        >
          <h2 className="text-white text-4xl font-bold mb-8">
            Kelly Smith biography
          </h2>
          <p className="text-neutral-400 text-xl leading-relaxed">
            Mr. Smith oversees all aspects of digital transformation, including team building, customer experience, 
            engineering, development, design, marketing technologies, and product management. His extensive experience 
            as Chief Digital Officer/Chief Experience Officer has given him a unique perspective, allowing him to lead 
            both front and back-of-house IT teams and manage data & security organizations efficiently.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4">
            Kelly currently serves as the Chief Digital Officer at Athletic Greens, a company focused on providing 
            world-class health and wellness products.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4">
            Prior to this role, Kelly was the Chief Strategy Officer of Hagerty, where he led 200 professionals in 
            IT, Digital, Data, Martech, and Security roles. During his tenure, he helped Hagerty grow its valuation 
            from nearly $1 billion to $3 billion, driving innovation across multiple platforms. This included the launch 
            of disruptive membership and marketplace services, as well as unique event platforms not seen before in the 
            automotive insurance industry.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4">
            In addition to his corporate achievements, Kelly has played a vital role in advising tech startups on scaling 
            operations and building out their digital infrastructures. His hands-on approach has allowed many businesses 
            to streamline operations and stay ahead in today’s competitive market. He is also a frequent speaker at 
            industry conferences, sharing insights on digital transformation, cybersecurity, and innovative product 
            development.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4">
            Kelly holds multiple certifications in cloud computing, cybersecurity, and agile methodologies. His passion 
            for continuous learning keeps him at the forefront of technology trends and emerging innovations. 
            Outside of work, Kelly is an avid car enthusiast, a hobby that aligns perfectly with his professional 
            experience in the automotive industry.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Grid;
