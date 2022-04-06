function whowins() {
  let jone1 = 89;
  let jone2 = 120;
  let jone3 = 103;
  let jonescore = (jone1 + jone2 + jone3) / 3;

  let mike1 = 116;
  let mike2 = 94;
  let mike3 = 123;
  let mikescore = (mike1 + mike2 + mike3) / 3;

  let mary1 = 97;
  let mary2 = 134;
  let mary3 = 105;
  let maryscore = (mary1 + mary2 + mary3) / 3;

  const winner = Math.max(maryscore, jonescore, mikescore);

  if (
    mikescore == maryscore ||
    maryscore == jonescore ||
    jonescore == mikescore
  )
    return "draw";
  else if (winner == jonescore) return `jone won,avg score:${jonescore}`;
  else if (winner == maryscore) return `mary won,avg score:${maryscore}`;
  else if (winner == mikescore) return `mike won,avg score:${mikescore}`;
}
console.log(whowins());
