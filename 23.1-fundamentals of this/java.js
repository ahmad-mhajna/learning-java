// Question 1:
console.log(this);
// this will Reference the window
// Question 2:
const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// this will Reference the window and name will be timmy
// we fix it by making a normal function
//    Question 3:
const myFuncDec = function () {
  console.log(this);
};
// this will Reference the window
//    Question 4:
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
// this will Reference the window
//    Question 5:
document.querySelector(".element").addEventListener(function () {
  console.log(this);
});
// we fix it by making a normal function
