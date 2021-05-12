import portraitEich from './images/profeich.png';
import './ProfEich.css';
import Pokeball from './Pokeball';

export default function ProfEich({ pokemon, count, onSetFree }) {
  return (
    <section className="profEich">
      <h2>Pokémon with Professor Eich ({count})</h2>
      <div className="flexbox">
        <img src={portraitEich} alt="Prof Eich holding a device" width="60" />
        {pokemon.map((pokemon) => (
          <Pokeball
            name={pokemon.name}
            type={pokemon.type}
            onSetFree={onSetFree}
            profEich
          />
        ))}
      </div>
    </section>
  );
}
