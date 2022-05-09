let array1 = [5, "car", "mouse", "cat"];
let array2 = ["cow", "car", "mouse", "cat"];

function makeAllCaps(arr) {
  const check = arr.every((i) => typeof i === "string");
  return new Promise((resolve, reject) => {
    if (check) {
      const upper = arr.map((element) => {
        return element.toUpperCase();
      });
      resolve(upper);
    } else {
      reject("Array contains non-string");
    }
  });
}
function sortWords(arr) {
  const check = arr.every((i) => typeof i === "string");
  return new Promise((resolve, reject) => {
    if (check) {
      arr.sort();
      resolve(arr);
    } else {
      reject();
    }
  });
}
makeAllCaps(array2)
  .then((arr) => {
    console.log(arr);
    sortWords(arr).then((words) => {
      console.log(words);
    });
  })
  .catch((err) => console.log(err));
