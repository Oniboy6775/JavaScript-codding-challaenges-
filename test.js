function avg(...args) {
  //   console.log(...args);
  let sum = 0;
  for (const item of args) {
    // console.log(item);
    sum += item;
  }
  return sum / args.length;
}
console.log(
  avg(2, 3, 4, 5) // 3.5
);
