let arr = new Array(100);
arr.fill(5, 0, 100);
// console.log(arr);
function autofill(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  return arr;
}
// console.log(autofill(arr));
const person = {
  age: "37",
  world: "earth",
  name: "joe",
};
const people = Object.values(person);
// console.log(people);
let personagain = Object.assign({}, people);
// console.log(personagain);
console.log(Array.isArray(personagain));
let arr2 = Array.from(arr);
let arr3 = arr;
