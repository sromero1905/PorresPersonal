import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-light text-gray-900 mb-6">Contacto</h3>
        <p className="text-gray-700 mb-8">¿Te gustaría trabajar juntos? ¡Contáctame!</p>
        <button className="px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
          Enviar Mensaje
        </button>
      </div>
    </section>
  );
}

export default Contact;
