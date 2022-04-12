function isString(string, callback) {
  if (typeof string === "string") callback(string);
}
isString("1234", console.log);
function firstWordUpperCase(string, callback) {
  string = string.split(" ");
  string[0] = string[0].toUpperCase();
  callback(string);
}
function fix(string) {
  string = string.join(`-`);
  console.log(string);
}
function isString2(callback) {
  if (typeof string === "string") callback(string);
}
firstWordUpperCase("to upper case", fix);
isString2(firstWordUpperCase("happy birth day", fix));
