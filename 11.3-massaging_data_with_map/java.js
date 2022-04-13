const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
let names = data.map(function (names) {
  return names.name;
});
let before1990 = [];
data.forEach(function (date) {
  year = date.birthday;
  year = year.replace("-", "");
  year = year.slice(year.indexOf(`-`) + 1, year.length);
  if (year < 1990) before1990.push(date);
});
function food(arr) {
  let meats = arr.map(function (obj) {
    let string = obj.favoriteFoods.meats.join(" ");
    return string;
  });
  let fishFood = arr.map(function (obj) {
    let string = obj.favoriteFoods.fish.join(" ");
    return string;
  });
  let favFood = fishFood.concat(meats);
  favFood = favFood.join(" ");
  favFood = favFood.split(" ");
  let foodCounter = {};
  favFood.forEach(function (food) {
    if (foodCounter[food]) {
      foodCounter[food]++;
    } else {
      foodCounter[food] = 1;
    }
  });
  console.log(foodCounter);
}
// console.log(names);
// console.log(before1990);
food(data);
