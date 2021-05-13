import styled from 'styled-components';
import portraitEich from './images/profeich.png';
import Pokeball from './Pokeball';

export default function ProfEich({
  pokemons,
  count,
  onSetFree,
  updatePokemons,
}) {
  return (
    <Container>
      <h2>Pokémon with Professor Eich ({count})</h2>
      <div>
        <img src={portraitEich} alt="Prof Eich holding a device" width="60" />
        {pokemons.map((pokemon, _, pokemons) => (
          <Pokeball
            name={pokemon.name}
            type={pokemon.type}
            onSetFree={() => onSetFree(pokemons, pokemon.name)}
          />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  border-bottom: 0.2rem solid sandybrown;
  border-radius: 0.4rem;
  padding: 0.5rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
