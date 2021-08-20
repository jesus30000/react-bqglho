import React from 'react';
import { Helmet } from 'react-helmet';

// Componenetes
import Formulario from './componentes/Formulario';

// Elementos
import { Header, Titulo, ContenedorHeader } from './elementos/Header';
import BotonCerrarSesion from './elementos/BotonCerrarSesion';

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Producto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Producto</Titulo>
          <BotonCerrarSesion />
        </ContenedorHeader>
      </Header>

      <Formulario />
    </>
  );
}

export default App;
