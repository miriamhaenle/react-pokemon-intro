import { useState } from 'react';
import Card from './Card';
import Pokeball from './Pokeball';
import PokeballHeader from './PokeballHeader';
import Header from './Header';
import './App.css';
import ProfEich from './ProfEich';

function App() {
  const initialPokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Wasser' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Smettbo', type: 'Elektro' },
    { name: 'Vulpix', type: 'Feuer' },
    { name: 'Pummeluff', type: 'Fee' },
  ];

  const [pokemon, setPokemon] = useState(initialPokemon);
  const [pokedex, setPokedex] = useState([]);
  const [profEichDex, setProfiEichSet] = useState([]);

  const findPokemon = (pokemon, name) =>
    pokemon.find((pokemon) => pokemon.name === name);

  const filterPokemon = (pokemon, name) =>
    pokemon.filter((pokemon) => pokemon.name !== name);

  function placeIntoPokedex(name) {
    const pokemonToAdd = findPokemon(pokemon, name);
    if (pokedex.length < 6) {
      setPokedex([pokemonToAdd, ...pokedex]);
    } else {
      setProfiEichSet([pokemonToAdd, ...profEichDex]);
    }
    removePokemon(pokemon, name, setPokemon);
  }

  function removePokemon(pokemon, name, updateStateFunc) {
    const updatedPokemons = filterPokemon(pokemon, name);
    updateStateFunc([...updatedPokemons]);
  }

  function setFree(name, profEich = false) {
    if (profEich) {
      removePokemon(profEichDex, name, setProfiEichSet);
    }
    removePokemon(pokedex, name, setPokedex);

    const pokemonToAdd = findPokemon(pokedex, name);
    setPokemon([pokemonToAdd, ...pokemon]);
  }

  return (
    <div>
      <Header />
      {profEichDex.length > 0 && (
        <ProfEich
          pokemon={profEichDex}
          count={profEichDex.length}
          onSetFree={setFree}
        />
      )}
      <section>
        <PokeballHeader count={pokedex.length} />
        <div className="flexbox pokeball">
          {pokedex.map((pokemon) => (
            <Pokeball
              name={pokemon.name}
              type={pokemon.type}
              onSetFree={setFree}
            />
          ))}
        </div>
      </section>
      <section>
        <h3>Pokémon in the wild</h3>
        <div className="grid">
          {pokemon.map((pokemon) => (
            <Card
              name={pokemon.name}
              type={pokemon.type}
              onPlaceIntoPokedex={placeIntoPokedex}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
