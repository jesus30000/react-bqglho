import styled from 'styled-components';
import theme from '../theme';

const SelectorContenedor = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SelectorImg = styled.img`
    margin: 8px;
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 2px solid ${theme.colorPrimario};
    border-radius: 6px;
    background-color: white;
    object-fit: contain;
`;

const Selector = styled.input`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

const SelectorLabel = styled.label`
    background-color: ${theme.colorPrimario};
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: white;
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

    &:hover {
        background: ${theme.colorPrimarioHover};
        transform: scale(1.03);
    }
`;

const ContenedorUrl = styled.div`
    width: 250px;
    overflow: auto;
    margin: 5px 0;
    color:${theme.colorPrimario};
`;
 
export {SelectorImg, Selector, SelectorLabel, SelectorContenedor, ContenedorUrl};