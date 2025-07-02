import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledMenu = styled.div`
    background: #588178; /* Cor de fundo da faixa verde */
    color: white;
    min-height: 10vh; /* Altura mínima da barra */
    display: flex;
    justify-content: space-between; /* Empurra os elementos para as extremidades */
    align-items: center;
    padding: 0 5%; /* Adiciona padding lateral usando porcentagem para ser responsivo */
    width: 100%; /* Ocupa 100% da largura do pai (body ou App) */
    box-sizing: border-box; /* Inclui padding na largura total */

    h1 {
        font-size: 1.5rem; /* Tamanho do "CAQP" */
        margin: 0; /* Remove margem padrão do h1 */
        flex-shrink: 0; /* Impede que o h1 encolha */
    }

    ul {
        list-style: none; /* Remove os marcadores de lista */
        display: flex; /* Para alinhar os itens horizontalmente */
        margin: 0; /* Remove margem padrão da ul */
        padding: 0; /* Remove padding padrão da ul */
        /* Flexbox para alinhar os itens à direita dentro da ul */
        justify-content: flex-end; 
        flex-grow: 1; /* Permite que a ul ocupe o espaço restante */
    }

    li {
        margin-left: 2rem; /* Espaçamento entre os itens do menu */
        font-size: 1rem; /* Tamanho da fonte dos itens */
        cursor: pointer;
        white-space: nowrap; /* Evita que os links quebrem linha */
        transition: background-color 0.3s ease, color 0.3s ease; /* Adicionei transition aqui também para o background */
    
        color: white;
        text-decoration: none; /* <-- CORRIGIDO: de 'nome' para 'none' */
        
        a {
            color: inherit; /* Herda a cor do li (branco) */
            text-decoration: none; /* Remove sublinhado padrão do link */
        }

        &:hover{
            background-color: black;
            color: white;
        }
    }
`;

const Menu = () => {
    return (
        <StyledMenu>
            <h1>CAQP</h1>
            <ul>
                <li><Link to='/'>Bemvindo</Link></li>
                <li><Link to='/medidas'>Medidas</Link></li>
                <li><Link to='/admin'>Administração</Link></li>
                <li><Link to='/mensagens'>Mensagens</Link></li>
                
            </ul>
        </StyledMenu>
    );
}

export default Menu;