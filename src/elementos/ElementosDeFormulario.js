import styled from 'styled-components';
import theme from './../theme'

const Formulario = styled.form`
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        padding: 1.5rem 0;
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: ${theme.colorSecundario};
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
        input {
            margin: .3rem;
        }
    }
`;
 
const Input = styled.input`
    font-size: 2rem; /* 32px */
    text-transform: uppercase;
    border: 2px solid ${theme.colorPrimario};
    outline: none;
    border-radius: 25px;
    color: ${theme.colorPrimario};
    
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.5rem; /* 24px */
    }
`;
 
const InputGrande = styled(Input)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;
`;
 
const ContenedorBoton = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;  /* 8px */

    @media(max-width: 60rem){ /* 950px */
        margin: 1.5rem 0;  /* 24px */
    }
`;

export { Formulario, Input, InputGrande, ContenedorBoton };