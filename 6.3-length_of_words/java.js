function numprint(arr) {
  let wordslength = [];
  for (let i = 0; i < arr.length; i++) {
    wordslength[i] = arr[i].length;
  }
  return wordslength;
}
console.log(numprint(["boo", "doooo", "hoo", "ro"]));
