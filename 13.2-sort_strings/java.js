const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const ascSort = foods.slice().sort();
const desSort = foods.slice().sort().reverse();
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
const ascSortUpper = foodsWithUpperCase
  .slice()
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
const desSortUpper = foodsWithUpperCase
  .slice()
  .sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const longestword = words.slice().sort((a, b) => a.length - b.length);
console.log(longestword);
