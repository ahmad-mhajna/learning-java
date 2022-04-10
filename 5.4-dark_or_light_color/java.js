function colors(color) {
  switch (color.toLowerCase()) {
    case `yellow`:
    case `pink`:
    case `orange`:
      console.log(`light color`);

      break;
    case `blue`:
    case `brown`:
    case `purple`:
      console.log(`dark color`);

      break;

    default:
      console.log(`Unknown color`);
      break;
  }
}
colors(`Blue`);
colors(`blue`);
colors(`Pink`);
colors(`pink`);
colors(`red`);
