import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';

// Componenetes
import { Header, Titulo } from './../elementos/Header';
import {
  Formulario,
  Input,
  ContenedorBoton
} from './../elementos/ElementosDeFormulario';
import Boton from '../elementos/Boton';
import Alerta from '../elementos/Alerta';

// Imagenes
import { ReactComponent as SvgLogin } from './../img/login.svg';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 13rem; /* 160px */
  margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

  const handleChange = e => {
    if (e.target.name === 'email') setCorreo(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});

    // Valdación del formulario
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Por favor ingresa un correo valido'
      });
      return;
    }

    if (correo === '' || password === '') {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Por favor rellena todos los datos'
      });
      return;
    }

    // Iniciar sesión en firebase
    try {
      await auth.signInWithEmailAndPassword(correo, password);
      history.push('/');
    } catch (error) {
      let mensaje;
      switch (error.code) {
        case 'auth/wrong-password':
          mensaje = 'La contraseña no es correcta.';
          break;
        case 'auth/user-not-found':
          mensaje =
            'No se encontro ninguna cuenta con este correo electrónico.';
          break;
        default:
          mensaje = 'Hubo un error al intentar iniciar sesión';
          break;
      }
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: mensaje
      });
    }
  };

  const limpiarInputs = () => {
    setCorreo('');
    setPassword('');
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>

      <Header>
        <Titulo>Iniciar Sesión</Titulo>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" type="button" primario onClick={limpiarInputs}>
            Limpiar
          </Boton>
          <Boton as="button" type="submit" primario>
            Iniciar Sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>

      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={setEstadoAlerta}
      />
    </>
  );
};

export default InicioSesion;
