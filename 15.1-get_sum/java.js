function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
getSum([1, 2, 3], [5, 66, 23]);
// at line 2 its let not const i used vscode debugger and found out after everything runs the sum is still 0 because its a const not a let so it cant be changed and we are missing a return at link there is no , between the 2 ars in line 11
