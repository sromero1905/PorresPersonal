import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-light text-gray-900 mb-6">Sobre Mí</h3>
        <p className="text-gray-700 leading-relaxed">
          Soy un desarrollador apasionado por el diseño minimalista. Me especializo en crear interfaces
          de usuario limpias y efectivas usando las últimas tecnologías.
        </p>
      </div>
    </section>
  );
}

export default About;
