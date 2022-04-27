function ArrayProto(array) {
  this.array = array;
  this.filter = function (filter) {
    const filteredArray = [];
    array.forEach((item) => {
      if (item === filter) {
        filteredArray.push(item);
      }
    });
    return filteredArray;
  };
  this.find = function (filter) {
    for (let item of arr) {
      if (item === filter) return item;
    }
  };
}
const arr = new ArrayProto([4, 3, 6, 7, 2, 5, 1, 7, 0, 9, 2]);
console.log(arr.filter(0));
console.log(arr.find(4));
