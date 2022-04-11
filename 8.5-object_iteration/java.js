function swapper(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
}
console.log(swapper({ 1: "111", 2: "222", 3: "333" }));
