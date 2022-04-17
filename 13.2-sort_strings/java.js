const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const descsort = foods.reverse();
console.log(descsort);
const ascsort = foods.reverse();
console.log(ascsort);
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
foodsWithUpperCase.reverse();
console.log(foodsWithUpperCase);
foodsWithUpperCase.reverse();
console.log(foodsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const longestword = words.sort((a, b) => a.length - b.length);
console.log(longestword);
