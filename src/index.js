import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Crear la raíz una sola vez
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Renderizar el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
