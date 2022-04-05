function date() {
  const newdate = new Date();
  const thisday = new Date().toLocaleString("en-us", { weekday: "long" });
  let month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    newdate
  );
  let whatistoday = `Today is ${thisday} the ${newdate.getDate()} of ${month} , ${newdate.getFullYear()}`;

  console.log(whatistoday);
}
date();
