const oldarry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oldarry2 = [`hello`, `bye`, `hey`, `world`];
function doubleValues(array) {
  const arraydouble = array.map(function (n) {
    sum = n * 2;
    return sum;
  });
  console.log(arraydouble);
}

function onlyEvenValues(array) {
  const arrayeven = [];
  array.forEach(function (n) {
    if (n % 2 === 0) {
      arrayeven.push(n);
    }
  });
  console.log(arrayeven);
}
function showFirstAndLast(array) {
  const last = array.length - 1;
  let type = array.map(function (n) {
    if (typeof n === "string") {
      return n;
    }
  });
  type = [type[0], type[type.length - 1]];

  console.log(type);
}
function vowelCount(string) {
  let regex = /[aeiou]/gi;
  const vowels = {};
  string.split("").forEach(function (char) {
    if (regex.test(char)) {
      if (vowels[char]) vowels[char] += 1;
      else vowels[char] = 1;
    }
  });
  console.log(vowels);
}
function capitalize(str) {
  str = Array.from(str);
  let newStr = str.map(function (string) {
    return string.toUpperCase();
  });
  newStr = newStr.join("");
  console.log(newStr);
}
function shiftLetters(str) {
  str = str.toLowerCase();
  let num = -1;
  let result = "";
  let charcode = 0;

  str.split(``).forEach(function (char) {
    charcode = char.charCodeAt() + num;
    result += String.fromCharCode(charcode);
  });
  console.log(result);
}
function swapCase(string) {
  string = string.split(" ");
  let cappedWords = string.map(function (word, index) {
    if (index % 2 === 0) {
      word = word.toUpperCase();
    }
    return word;
  });
  cappedWords = cappedWords.join(" ");
  console.log(cappedWords);
}
doubleValues(oldarry);
onlyEvenValues(oldarry);
showFirstAndLast(oldarry2);
vowelCount("Hello World");
capitalize("alphabate");
shiftLetters("uftu");
swapCase("this is a string");
