import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'PokemonHollow';
    src: url('./assets/PokemonHollow.ttf') format('truetype');
  }

  * {
      box-sizing: border-box;
    }

  body {
    font-family:  'Helvetica', sans-serif;
    font-size: 1.125rem;
    margin: 0;

    background: #f6e652;
  }

  h1, h2 {
    font-family: 'PokemonHollow', sans-serif;
  }

 
`;
