function steps(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    step += "#";
    let j = 0;
    for (; j < i; j++) {
      step += "#";
    }
    for (let k = n - 1; k > i; k--) {
      step += " ";
    }
    console.log(step);
  }
}
steps(10);
