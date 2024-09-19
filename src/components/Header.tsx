import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/30 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Mi Portfolio</h1>
        <nav className="space-x-8">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition">Sobre Mí</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition">Proyectos</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
