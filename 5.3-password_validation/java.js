function passwordvald(password) {
  if (password.length > 7) console.log(`strong`);
  else console.log(`weak`);
}
function passwordvald2(password) {
  console.log(password.length > 7 ? `strong` : `weak`);
}
function passwordvald3(password) {
  const regex = /[A-Z]/;
  console.log(
    password.length > 7 && regex.test(password)
      ? `Very Strong`
      : password.length > 7
      ? `strong`
      : `weak`
  );
}
passwordvald(`1234567`);
passwordvald(`12345678`);
passwordvald2(`1234567`);
passwordvald2(`12345678`);
passwordvald3(`1234567`);
passwordvald3(`123456789a`);
passwordvald3(`123456789A`);
