import { createGlobalStyle } from 'styled-components';
import pokemonHollow from './assets/PokemonHollow.ttf'

export default createGlobalStyle`

  @font-face {
    font-family: 'PokemonHollow';
    src: url(${pokemonHollow}) format('truetype');
  }

  * {
      box-sizing: border-box;
    }

  body {
    font-family:  'Helvetica', sans-serif;
    font-size: 1.125rem;
    margin: 0;

    background: hsl(44, 92%, 55%);
  }

  h2 {
    font-family: 'PokemonHollow';
  }

 
`;
