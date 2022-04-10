let populations = [9, 770, 100, 300];
function populationPercentages(populations) {
  let percentages = [];
  for (let i = 0; i < populations.length; i++) {
    percentages[i] = (populations[i] / 7700) * 100;
  }
  return percentages;
}
console.log(populationPercentages(populations));
