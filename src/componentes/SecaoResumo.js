import React from "react";
import styled from "styled-components";

const Inicio = styled.div`
 // min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: black;
`;

const Descricao = styled.div `
  flex:1;
  padding-right: 5rem;
  height: 1px;
  h1{
    font-weight: bold;
    font-size: 3rem;
    color: yellow;
  }
  h2{
    font-size: 2rem;
    font-weight: bold;
    color: yellow;
  }
`;

const SecaoResumo = () => {
  return (
    <Inicio>
        <Descricao>
            <h1>Diogens Borges</h1> {/* Corrigido para exibir a mensagem desejada */}
            <h2>Engenheiro Mecanico</h2>
            <p>
            O desenvolvimento com o Render foi uma experiência transformadora. Consegui implantar minha API Node.js de forma rápida e eficiente,
            e a depuração dos problemas de conexão com o MongoDB foi facilitada pelos logs claros. Agora, meu aplicativo está online e pronto para uso!
            </p>
            <button>Fale Comigo</button>
          </Descricao>
    </Inicio>
  );
};

export default SecaoResumo;