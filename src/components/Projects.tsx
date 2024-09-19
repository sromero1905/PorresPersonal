import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-light text-gray-900 mb-6">Proyectos</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Agrega tus proyectos aquí */}
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-medium text-gray-800 mb-2">Proyecto 1</h4>
            <p className="text-gray-600">Descripción breve del proyecto.</p>
          </div>
          {/* Añade más proyectos según sea necesario */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
