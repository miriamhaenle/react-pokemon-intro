import styled from 'styled-components/macro';
import getColor from './lib/colors';
import Pokeball from './images/pokeball.svg';

export default function Card(props) {
  // const name = props.name;
  // const type = props.type
  const { name, type, onPlaceIntoPokedex } = props;

  return (
    <CardWrapper className="card" style={{ background: getColor(type) }}>
      <h2>{name}</h2>
      <p>{type}</p>
      <Button onClick={() => onPlaceIntoPokedex(name)}>
        <img
          src={Pokeball}
          width="30"
          height="30"
          alt="Catch pokemon and add to pokeball"
        />
      </Button>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
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
`;

const Button = styled.button`
  border: none;
  background: ${({ isColored }) => (isColored ? 'hotpink' : 'transparent')};
  cursor: pointer;
  transition: transform ease-out 0.2s;

  &:hover {
    transform: rotate(-25deg);
    transition: transform ease-in 0.3s;
  }
`;

// const ColoredButton = styled(Button)`
//   background: hotpink;
// `;
