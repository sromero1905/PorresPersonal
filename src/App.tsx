import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route para el enrutamiento
import Home from './pages/home';


const App = () => {
  return (
    <Routes> {/* Define tus rutas aquí */}
      <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}

      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
};

export default App;
