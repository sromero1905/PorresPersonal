import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter para el enrutamiento
import "./index.css"
import App from './App'; // Importa el componente principal de la aplicación
import reportWebVitals from './reportWebVitals'; // Opcional: para medir el rendimiento

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Asegúrate de que App está envuelto aquí */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
