const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
function getCandy(candyStore, id) {
  let askedforcandy;
  availableCandy = candyStore.candies;
  availableCandy.forEach((candy) => {
    if (candy.id === id) askedforcandy = candy;
  });
  if (typeof askedforcandy === `undefined`) return `Candy not Found`;
  return askedforcandy;
}
function getPrice(candyStore, id) {
  let askedforcandy;
  availableCandy = candyStore.candies;
  availableCandy.forEach((candy) => {
    if (candy.id === id) askedforcandy = candy;
  });
  if (typeof askedforcandy === `undefined`) return `Candy not Found`;
  return `${askedforcandy.name} costs ${askedforcandy.price}$`;
}

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}

function buy(candyStore, id) {
  let askedforcandy = getCandy(candyStore, id);
  if (askedforcandy.amount > 0) {
    candyStore.cashRegister += askedforcandy.price;
    askedforcandy.amount--;
  } else console.log(`this candy is out of stock`);
}

console.log(getCandy(candyStore, "as12f"));
console.log(getPrice(candyStore, "as12f"));
addCandy(candyStore, "19aa9", "Laffy Taffy", 2.5);
console.log(candyStore);
buy(candyStore, "as12f");
console.log(candyStore);
