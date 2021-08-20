import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from './../theme'

const Boton = styled(Link)`
    background: ${(props) => props.primario ? theme.colorPrimario : '#457b9d'};
    width: ${(props) => props.conIcono ? '16rem' : 'auto'}; /* 250px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    transition: transform ease-in .20s;
    margin: 0 5px;
 
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }

    &:hover {
        background: ${(props) => props.primario ? theme.colorPrimarioHover : '#2c80b5'};
        transform: scale(1.03);
    }
`;

export default Boton;