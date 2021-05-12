import portraitEich from './images/profeich.png';
import './ProfEich.css';
import Pokeball from './Pokeball';

export default function ProfEich({
  pokemons,
  count,
  onSetFree,
  updatePokemons,
}) {
  return (
    <section className="profEich">
      <h2>Pokémon with Professor Eich ({count})</h2>
      <div className="flexbox">
        <img src={portraitEich} alt="Prof Eich holding a device" width="60" />
        {pokemons.map((pokemon, _, pokemons) => (
          <Pokeball
            name={pokemon.name}
            type={pokemon.type}
            onSetFree={() => onSetFree(pokemons, pokemon.name, updatePokemons)}
          />
        ))}
      </div>
    </section>
  );
}
