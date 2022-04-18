// Block 1
function funcA() {
  // this will return  undefined because javascript did read the var but not the value to fix this put console log under the var a
  console.log(a);
  //   this code will reture 2 because javascript read funaction first
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      // this will reture "Aurelio De Rosa" because it will reture the closest to it
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
// a is going to be undefined because b=0 is not a type
console.log(typeof a);
// this will reture number
console.log(typeof b);
// Block 4
function funcC() {
  console.log("1");
}
// this will reture 2 because it will use last time we defiend funcC
funcC();
// Block 5
function funcC() {
  console.log("2");
}
// this will console log 2
funcC();
function funcD1() {
  d = 1;
}
funcD1();
// this will console log 1 because you typed funcd1 now d is  1
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
// you cant access var e here its scope is in that function to be able to access you need to reture it
console.log(e);
// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
// both console logs wll reture ("Value of f in global scope: ", undefined) because var dose not have value yet
var f = 1;
funcE();
