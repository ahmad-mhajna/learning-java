const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let lettersinwords = [];
function counting(array) {
  for (let j in array) {
    let string = array[j];
    string = string.toLowerCase();
    string = string.replace(" ", "");
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      if (lettersinwords[char]) {
        lettersinwords[char]++;
      } else {
        lettersinwords[char] = 1;
      }
    }
  }
}
counting(array);
console.log(lettersinwords);
// [
//   h: 3, e: 4, l: 3, o: 7,
//   g: 3, d: 3, a: 2, y: 2,
//   u: 2, r: 3, w: 1, c: 1,
//   m: 2, t: 1, b: 1, s: 1
// ]
