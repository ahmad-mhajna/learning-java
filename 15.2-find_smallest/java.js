function findSmallest(a, b, c) {
  if (c < b && c < a) {
    return c;
  } else if (a < c && a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2));
// at line 10 find smalest is with 1 l not 2 l i used vscode the if should have and  in line 2 and 4
