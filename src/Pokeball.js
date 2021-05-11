import './Pokeball.css';
import getColor from './lib/colors';

export default function Pokeball({ name, type }) {
  return (
    <article className="ball" style={{ background: getColor(type) }}>
      <h2>{name}</h2>
      <p>{type}</p>
    </article>
  );
}
