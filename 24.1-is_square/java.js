function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.isSquare = () => {
    return a === b && b === c && c === d;
  };
}
const square = new Square(2, 2, 2, 2);

console.log(square.isSquare());
