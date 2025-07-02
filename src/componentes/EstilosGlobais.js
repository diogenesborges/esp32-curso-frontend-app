import { createGlobalStyle } from 'styled-components';

const EstilosGlobais = createGlobalStyle`
    body {
        font-family: Arial, sans-serif;
        margin: 0; 
        background-color: #004D40; /* Cor de fundo principal da página */
        color: #fff;
        /* Removido display: flex, align-items, min-height, padding do body para permitir que o Menu ocupe 100% da largura */
    }

    main {
        max-width: 600px; 
        padding: 30px; 
        background-color: #003632; 
        border-radius: 8px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin: 40px auto; /* Adicionado margem superior/inferior e centralizado horizontalmente */
    }
    
    .hero {
        text-align: left;
    }
    
    /* Ajustes para "Bem-Vindo!!" (ou o primeiro h1 dentro de .hero) */
    .hero h1 {
        color: #00BCD4; /* Tom de ciano/turquesa mais vivo */
        font-size: 1.2em; /* Reduzindo o tamanho da fonte */
        margin-bottom: 5px; /* Espaçamento menor */
        font-weight: normal; /* Sem negrito */
    }
    
    /* Ajustes para "Diogens Borges" (assumindo que é o seu h2, que tem a cor amarela na sua imagem) */
    .hero h2 {
        color: #FFEB3B; /* Amarelo */
        font-size: 3.5em; /* Aumentado o tamanho para simular o destaque na imagem */
        margin-bottom: 0px; /* Reduzir/zerar o espaço abaixo do nome */
        font-weight: 900; /* Mais negrito para destacar */
        line-height: 1.2; /* Reduzindo o espaçamento da linha */
    }
    
    /* Ajustes para "Engenheiro Mecanico" (assumindo que é o seu h3, que tem a cor laranja na sua imagem) */
    .hero h3 {
        color: #FF9800; /* Laranja */
        font-size: 1.5em; /* Aumentado o tamanho */
        margin-top: 0px; /* Reduzir/zerar o espaço acima */
        margin-bottom: 15px; /* Espaçamento ajustado antes do parágrafo */
        font-weight: normal;
    }
    
    /* Ajustes para o parágrafo de texto */
    .hero p {
        line-height: 1.6;
        margin-top: 0px; 
        margin-bottom: 25px; 
        color: white; /* Cor do texto branco */
        font-size: 1rem;
    }
    
    /* Ajustes para o botão "Fale Comigo" */
    .contact-button {
        background-color: blue; /* Azul sólido */
        color: #fff;
        border: 1px solid #fff;
        padding: 8px 20px;
        border-radius: 20px; /* Mais arredondado */
        cursor: pointer;
        font-size: 0.9em; /* Texto menor no botão */
        font-weight: bold;
        text-transform: uppercase;
        transition: background-color 0.3s ease;
    }
    
    .contact-button:hover {
        background-color: red; /* Vermelho no hover */
        color: #003632;
        border-color: #00BCD4;
    }
`;

export default EstilosGlobais;