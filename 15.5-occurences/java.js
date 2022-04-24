function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
// in line 3 there is a space between star and .length in line 5 counter should have += not + alone
