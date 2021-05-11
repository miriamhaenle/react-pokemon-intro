import './Pokeball.css';
import getColor from './lib/colors';

export default function Pokeball({ name, type, onSetFree }) {
  return (
    <article className="ball" style={{ borderColor: getColor(type) }}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onSetFree(name)}>🏜</button>
    </article>
  );
}
