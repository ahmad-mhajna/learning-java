// block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
//  both vars under this line will give back 5 because number and input are not used and we return  b and we define it as 5
var firstResult = someFunction(9);
var result = firstResult(2);
// block 2
var a = 1;
function b2() {
  a = 10;
  //   this return nothing
  return;
  function a() {}
}
b2();
// since the reture return nothing this will be 1
console.log(a);
// block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  // thanks to the timeout function i is already 3 when logged
  setTimeout(log, 100);
}
