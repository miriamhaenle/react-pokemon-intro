import getColor from './lib/colors';

import './Card.css';
import Pokeball from './images/pokeball.svg';

export default function Card(props) {
  // const name = props.name;
  // const type = props.type
  const { name, type, onPlaceIntoPokedex } = props;

  return (
    <article className="card" style={{ background: getColor(type) }}>
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
    </article>
  );
}
