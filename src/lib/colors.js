export default function getColor(element) {
  const backgroundColors = {
    Elektro: 'gold',
    Feuer: 'crimson',
    Pflanze: 'green',
    Wasser: 'midnightblue',
    Käfer: 'sandybrown',
    Fee: 'lightpink',
    default: 'grey',
  };

  return backgroundColors[element]
    ? backgroundColors[element]
    : backgroundColors['default'];
}

// function getColor(element) {
//   let backgroundColor = '';

//   if (element === 'Elektro') {
//     backgroundColor = 'yellow';
//   } else if (element === 'Feuer') {
//     backgroundColor = 'red';
//   } else if (element === 'Pflanze' || element === 'Frosch') {
//     backgroundColor = 'green';
//   } else if (element === 'Wasser') {
//     backgroundColor = 'blue';
//   } else {
//     backgroundColor = 'grey';
//   }

//   switch (element) {
//     case 'Elektro':
//       backgroundColor = 'yellow';
//       break;
//     case 'Feuer':
//       backgroundColor = 'red';
//       break;
//     case 'Frosch':
//     case 'Pflanze':
//       backgroundColor = 'green';
//       break;
//     case 'Wasser':
//       backgroundColor = 'blue';
//       break;
//     default:
//       backgroundColor = 'grey';
//   }
//   return backgroundColor;
// }
