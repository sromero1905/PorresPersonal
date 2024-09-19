import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900">Hola, soy [Tu Nombre]</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">Desarrollador Frontend Minimalista</p>
      </div>
    </section>
  );
}

export default Hero;
