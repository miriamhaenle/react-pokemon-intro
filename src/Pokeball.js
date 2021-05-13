import styled from 'styled-components/macro';
import getColor from './lib/colors';

export default function Pokeball({ name, type, onSetFree, pokemons }) {
  return (
    <Ball background={getColor(type)}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onSetFree(pokemons, name)}>🏜</button>
    </Ball>
  );
}

const Ball = styled.article`
  border-radius: 50%;
  height: 11rem;
  width: 11rem;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: ${(props) => props.background};

  h2,
  p {
    font-size: 1.2rem;
  }

  button {
    background: none;
    font-size: 2rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    border-color: white;
    cursor: pointer;

    &:hover {
      font-size: 2.3rem;
    }
  }
`;
