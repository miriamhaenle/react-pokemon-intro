import pokemonLogo from './images/pokemon-logo.png';

import styled from 'styled-components';

export default function Header() {
  return (
    <header>
      <Logo />
    </header>
  );
}

const Logo = styled.div`
  background-image: url(${pokemonLogo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 10rem;
  height: 6rem;
  margin: 0 auto;
`;
