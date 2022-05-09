function greaterThanTen(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}
greaterThanTen(20)
  .then((num) => {
    console.log(`${num} > 10`);
  })
  .catch((num) => {
    console.log(`${num} < 10`);
  });
