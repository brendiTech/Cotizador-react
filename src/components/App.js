import React from 'react';
import Header from './Header';
import Form from './Form';

function App() {
  return (
    <div className="contenedor">
      <Header
        titulo = "Cotizador de Seguro de Auto"
      />

    <div className="contenedor-formulario">
      <Form/>
    </div>

    </div>
  );
}

export default App;
