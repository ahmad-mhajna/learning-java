let grades = [99, 88, 77, 66, 22, 45, 86, 94, 36, 94, 78, 12];
const max = grades.reduce((max, currval) => {
  if (currval > max) return currval;
  return max;
});
console.log(max);
const sum = grades.reduce((max, currval) => {
  return max + currval;
});
console.log(sum);
const average =
  grades.reduce((max, currval) => {
    return max + currval;
  }) / grades.length;
console.log(average);
