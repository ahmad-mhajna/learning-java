const people = ["Greg", "Mary", "Devon", "James"];
function print() {
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
}

// print();
people.splice(0, 1);
people.splice(2, 1);
people.unshift(`Matt`);
people.push(`Ahmad`);

function findmary() {
  let marynum = people.indexOf(`Mary`) + 1;
  for (let i = 0; i < marynum; i++) {
    console.log(people[i]);
  }
}
// findmary();
// console.log(people.indexOf(`Mary`));
// console.log(people.indexOf(`foo`));
people.splice(3, 1, `james`);
people.splice(0, 1, `Greg`);
people.splice(2, 1, `Elizabeth`, `Artie`);
console.log(people);
let withbob = people.concat(`bob`);
console.log(withbob);
