const n = [1, 2, 3, 4, 5];
function print() {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }
}
function arrayLength() {
  let length = 0;
  for (let i = 0; i < n.length; i++) {
    length++;
  }
  console.log(length);
}
function arraySum() {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  console.log(sum);
}
function arrayMulti() {
  let sum = 1;
  for (let i = 0; i < n.length; i++) {
    sum *= n[i];
  }
  console.log(sum);
}
print();
arrayLength();
arraySum();
arrayMulti();
