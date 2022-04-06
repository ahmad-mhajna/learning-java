// declaration
function percentageOfWorld2(population) {
  let sum = (population / 7900) * 100;
  return sum;
}
// expression
const percentageOfWorld1 = (population) => (population / 7900) * 100;
// 3 counters var
let china = percentageOfWorld1(1402);
let america = percentageOfWorld1(329.5);
let israel = percentageOfWorld1(9.217);
// calling
console.log(china);
console.log(america);
console.log(israel);
//calling again
china = percentageOfWorld2(1402);
america = percentageOfWorld2(329.5);
israel = percentageOfWorld2(9.217);
console.log(china);
console.log(america);
console.log(israel);
