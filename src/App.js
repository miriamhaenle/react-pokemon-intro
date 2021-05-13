import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Pokeball from './Pokeball';
import PokeballHeader from './PokeballHeader';
import Header from './Header';
import ProfEich from './ProfEich';

function App() {
  const initialPokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Water' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Vulpix', type: 'Feuer' },
    { name: 'Pummeluff', type: 'Fee' },
    { name: 'Turtok', type: 'Wasser' },
    { name: 'Piepi', type: 'Fee' },
    { name: 'Bluzuk', type: 'Käfer' },
    { name: 'Abra', type: 'Psycho' },
  ];

  const [pokemon, setPokemon] = useState(initialPokemon);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonWithProfEich, setPokemonWithProfEich] = useState([]);

  const findPokemon = (pokemon, name) =>
    pokemon.find((pokemon) => pokemon.name === name);

  const filterPokemon = (pokemon, name) =>
    pokemon.filter((pokemon) => pokemon.name !== name);

  function placeIntoPokedex(name) {
    const pokemonToAdd = findPokemon(pokemon, name);
    if (pokedex.length < 6) {
      setPokedex([pokemonToAdd, ...pokedex]);
    } else {
      setPokemonWithProfEich([pokemonToAdd, ...pokemonWithProfEich]);
    }
    removePokemon(pokemon, name, setPokemon);
  }

  function removePokemon(pokemons, name, updateStateFunc) {
    const updatedPokemons = filterPokemon(pokemons, name);
    updateStateFunc(updatedPokemons);
  }

  function updatePokemons(pokemons, name) {
    const pokemonToAdd = findPokemon(pokemons, name);
    setPokemon([pokemonToAdd, ...pokemon]);
  }

  function setFree(pokemons, name, updateStateFunc) {
    removePokemon(pokemons, name, updateStateFunc);
    updatePokemons(pokemons, name);
  }

  function setFreeFactory(updateStateFunc) {
    return (pokemons, name) => setFree(pokemons, name, updateStateFunc);
  }

  return (
    <div>
      <Header />
      {pokemonWithProfEich.length > 0 && (
        <ProfEich
          pokemons={pokemonWithProfEich}
          count={pokemonWithProfEich.length}
          onSetFree={setFreeFactory(setPokemonWithProfEich)}
        />
      )}
      <section>
        <PokeballHeader count={pokedex.length} />
        <PokeballContainer>
          {pokedex.map((pokemon) => (
            <Pokeball
              name={pokemon.name}
              type={pokemon.type}
              onSetFree={setFreeFactory(setPokedex)}
              pokemons={pokedex}
            />
          ))}
        </PokeballContainer>
      </section>
      <section>
        <h3>Pokémon in the wild</h3>
        <Pokemon>
          {pokemon.map((pokemon) => (
            <Card
              name={pokemon.name}
              type={pokemon.type}
              onPlaceIntoPokedex={placeIntoPokedex}
            />
          ))}
        </Pokemon>
      </section>
    </div>
  );
}

export default App;

const PokeballContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
`;

const Pokemon = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
`;
