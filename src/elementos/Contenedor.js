import styled from "styled-components";

const Contenedor = styled.div`
    background: white;
    width: 90%;
    max-width: 90rem; /*1110px*/
    height: 90vh;
    max-height: 50rem;  /* 800px */
    overflow-y: auto;
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
    border-radius: 0.625rem; /* 10px */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 100;
 
    @media(max-width: 60rem){ /* 950px */
        height: 95vh;
        max-height: none;
    }
`;

export default Contenedor;