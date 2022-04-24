function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// an array start from 0 so it should not be 2,4,6,8,10 it should be 1,3,5,7,9 and index for 10 in the array is NaN
