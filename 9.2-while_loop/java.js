let populations = [9, 770, 100, 300];
function populationPercentages(populations) {
  let percentages = [];
  let i = 0;
  while (i < populations.length) {
    percentages[i] = (populations[i] / 7700) * 100;
    i++;
  }
  return percentages;
}
console.log(populationPercentages(populations));
