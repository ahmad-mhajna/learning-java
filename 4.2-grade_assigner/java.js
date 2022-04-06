function score(num) {
  if (num <= 64 && num >= 0) return "f";
  else if (num <= 69 && num >= 65) return "d";
  else if (num <= 79 && num >= 70) return "c";
  else if (num <= 89 && num >= 80) return "b";
  else if (num <= 100 && num >= 90) return "a";
}
console.log(score(64));
console.log(score(65));
console.log(score(79));
console.log(score(80));
console.log(score(99));
