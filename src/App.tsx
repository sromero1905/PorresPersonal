import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route para el enrutamiento
import Home from './pages/home'; // Ruta al componente HomePage


const App = () => {
  return (
    <Routes> {/* Define tus rutas aquí */}
      <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
      
    </Routes>
  );
};

export default App;
