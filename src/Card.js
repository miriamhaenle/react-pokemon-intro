import getColor from './lib/colors';
import Pokeball from './images/pokeball.svg';
import styled from 'styled-components';

export default function Card({ name, type, onPlaceIntoPokedex }) {
  return (
    <CardWrapper background={getColor(type)}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onPlaceIntoPokedex(name)}>
        <img
          src={Pokeball}
          width="30"
          height="30"
          alt="Catch pokemon and add to pokeball"
        />
      </button>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  background: ${(props) => props.background || '#e65a41'};
  color: ivory;
  padding: 0.3rem;
  margin: 0.2rem;
  border-radius: 0.5rem;

  display: grid;
  place-items: center;

  h2,
  p {
    text-shadow: 0 -0.5px 2px lightslategray;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    transition: transform ease-out 0.2s;

    &:hover {
      transform: rotate(-25deg);
      transition: transform ease-in 0.3s;
    }
  }
`;
