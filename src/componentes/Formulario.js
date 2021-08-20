import React, { useState, useEffect, useRef } from 'react';

// Elementos
import { Formulario, Input, ContenedorBoton } from '../elementos/ElementosDeFormulario';
import Boton from '../elementos/Boton';
import Alerta from '../elementos/Alerta';
import {SelectorImg, Selector, SelectorLabel, SelectorContenedor, ContenedorUrl} from '../elementos/SelectorImagen';

// Img
import { ReactComponent as IconoPlus } from '../img/plus.svg';
import SinImagen from '../img/sin-imagen.jpg';

// firebase
import agregarProducto from '../firebase/agregarProducto';

const FormularioGasto = () => {
    const [inputCodigo, setInputCodigo] = useState('');
    const [inputDescripcion, setInputDescripcion] = useState('');
    // Image Chooser
    const [inputFile, setInputFile] = useState('');
    const [imagen, setImagen] = useState(SinImagen);
    const ref = useRef();
    // Alerta
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    // Colocar imagen seleccionada en una etiqueta img
    useEffect(() => {
        if(inputFile.length > 0) {
            setImagen(URL.createObjectURL(inputFile[0]));
        }
    },[inputFile]);

    const handleChange = (e) => {
        e.preventDefault();

        if( e.target.name === 'codigo' ) {
            setInputCodigo(e.target.value);
        }
        else if( e.target.name === 'descripcion' ){
            setInputDescripcion(e.target.value);
        }
        else if(e.target.name === 'file') {
            setInputFile(e.target.files);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Comprobamos que los campos no esten vacios
        if(inputDescripcion !== '' && inputCodigo !== '' && inputFile) {
            // Agregar 
            agregarProducto({
                codigo: inputCodigo,
                descripcion: inputDescripcion,
                imagen: inputFile[0]
            })
            .then(() => {
                // Limpiar inputs
                limpiarInputs();
                setEstadoAlerta(true);
                setAlerta({
                    tipo: 'exito',
                    mensaje: 'Agregado correctamente.'
                });
            })
            .catch((error) => {
                setEstadoAlerta(true);
                if(error.message === "Existe"){
                    setAlerta({
                        tipo: 'error',
                        mensaje: 'Ya existe un registro con ese código.'
                    });
                } else {
                    setAlerta({
                        tipo: 'error',
                        mensaje: 'Hubo un problema al intentar agregar.'
                    });
                }
            });  
        }
        else {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Por favor rellene todos los campos.'
            });
        }
    }

    const limpiarInputs = () => {
        setInputDescripcion('');
        setInputCodigo('');
        setInputFile('');
        setImagen(SinImagen);
        ref.current.value = "";
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <Input 
                type="text" 
                name="codigo"
                id="codigo"
                placeholder="Código"
                value={inputCodigo}
                onChange={handleChange}
            />
            <Input
                type="text"
                name="descripcion"
                id="descripcion"
                placeholder="Descripción"
                value={inputDescripcion}
                onChange={handleChange}
            />
            <SelectorContenedor>
                <SelectorImg src={imagen} />
                <Selector 
                    type="file" 
                    id="file" 
                    name="file"
                    accept="image/*"
                    multiple={false}
                    onChange={handleChange}
                    ref={ref}
                />
                <ContenedorUrl>{imagen === SinImagen ? "Dirección:" : imagen}</ContenedorUrl>
                <SelectorLabel htmlFor="file" >Seleccionar Imagen</SelectorLabel>
            </SelectorContenedor>
            <ContenedorBoton>
                <Boton as="button" type="button" primario onClick={limpiarInputs}>Limpiar</Boton>
                <Boton as="button" type="submit" primario conIcono>
                    Agregar Producto
                    <IconoPlus />
                </Boton>
            </ContenedorBoton>

            <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={setEstadoAlerta}
            />
        </Formulario>
    );
}
 
export default FormularioGasto;