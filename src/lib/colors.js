export default function getColor(element) {
  const backgroundColors = {
    Elektro: '#f6bd20',
    Feuer: '#de5239',
    Pflanze: '#62d5b4',
    Water: '#8bc5cd',
    Käfer: '#313152',
    Fee: '#ffacac',
    Psycho: '#cdbd20',
    default: 'grey',
  };

  return backgroundColors[element]
    ? backgroundColors[element]
    : backgroundColors['default'];
}
