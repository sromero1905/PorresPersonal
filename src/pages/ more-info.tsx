import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MoreInfo: React.FC = () => {
  // Definimos variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza a la parte superior de la página
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-20 px-6">
      {/* Título principal */}
      <motion.h1
        className="text-5xl font-extrabold mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Francisco Romero Porres
      </motion.h1>

      {/* Descripción */}
      <motion.p
        className="text-lg text-neutral-400 leading-relaxed max-w-3xl text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Francisco es un líder en transformación digital, reconocido por su capacidad para impulsar la innovación y la eficiencia en diversas industrias. Su enfoque centrado en el usuario ha permitido a numerosas organizaciones adaptarse a la era digital y prosperar en un entorno empresarial en constante cambio.
      </motion.p>

      {/* Sección de biografía */}
      <motion.div
        className="bg-neutral-900 p-10 rounded-lg shadow-lg max-w-4xl w-full mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-4">Biografía</h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-4">
          Con más de 25 años de experiencia en el ámbito digital, Francisco ha ocupado roles estratégicos en empresas de Fortune 100 y ha sido mentor de startups. Su pasión por la tecnología y la innovación lo han llevado a ser un referente en su campo, enfocándose en crear soluciones sostenibles y escalables que impulsan el crecimiento organizacional.
        </p>
        <p className="text-neutral-400 text-lg leading-relaxed mb-4">
          Francisco es un defensor del uso de la tecnología para el bien social y la sostenibilidad. Ha trabajado en proyectos que no solo benefician a las empresas, sino que también promueven el desarrollo sostenible y la responsabilidad social corporativa.
        </p>
        <p className="text-neutral-400 text-lg leading-relaxed">
          A través de su carrera, ha demostrado una habilidad única para transformar desafíos complejos en oportunidades, alineando estrategias de negocio con tecnologías emergentes para garantizar el éxito a largo plazo.
        </p>
      </motion.div>

      {/* Sección de educación */}
      <motion.div
        className="bg-neutral-900 p-10 rounded-lg shadow-lg max-w-4xl w-full mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-4">Educación</h2>
        <ul className="text-neutral-400 text-lg list-disc pl-6 space-y-2">
          <li><strong>Master en Administración de Empresas (MBA)</strong> - Universidad de Harvard</li>
          <li><strong>Licenciatura en Ingeniería de Sistemas</strong> - Universidad de Buenos Aires</li>
          <li><strong>Certificación en Transformación Digital</strong> - MIT Sloan School of Management</li>
          <li><strong>Curso de Sostenibilidad y Responsabilidad Social</strong> - Universidad de Stanford</li>
        </ul>
      </motion.div>

      {/* Sección de experiencia */}
      <motion.div
        className="bg-neutral-900 p-10 rounded-lg shadow-lg max-w-4xl w-full mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-4">Experiencia</h2>
        <ul className="text-neutral-400 text-lg list-disc pl-6 space-y-2">
          <li><strong>Chief Digital Officer</strong> - Empresa XYZ (2018 - Presente): Lidera la estrategia digital y la innovación tecnológica.</li>
          <li><strong>Director de Innovación</strong> - Empresa ABC (2015 - 2018): Implementó soluciones digitales que aumentaron la eficiencia operativa y mejoraron la experiencia del cliente.</li>
          <li><strong>Consultor en Transformación Digital</strong> - Empresa 123 (2010 - 2015): Asesoró a empresas en su camino hacia la digitalización, ayudándolas a adoptar tecnologías emergentes y a optimizar procesos.</li>
          <li><strong>Mentor de Startups</strong> - Diversas organizaciones (2015 - Presente): Ha guiado a nuevas empresas en sus esfuerzos por innovar y crecer en el espacio digital.</li>
        </ul>
      </motion.div>

      {/* Botones */}
      <div className="w-full flex flex-col items-center mt-12 space-y-4">
        <a
          href="mailto:info@franciscoporres.com?subject=Consulta%20de%20Contacto"
          className="inline-block bg-transparent border border-neutral-600 text-neutral-400 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out text-lg font-semibold"
        >
          Get in Touch
        </a>

        <a
          href="/"
          className="inline-block bg-transparent border border-neutral-600 text-neutral-400 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out text-md"
        >
          Volver al Home
        </a>
      </div>
    </section>
  );
};

export default MoreInfo;
