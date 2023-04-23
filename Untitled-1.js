const solution = (A = []) => {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 0;
  let maxValue = Math.max(...A);
  let resultList = [];
  //   console.log(maxValue);
  for (let index = 1; index <= maxValue; index++) {
    const element = A[index];
    let firstArray = A.slice(0, index);
    let secondArray = A.slice(index);
    let sumFirstArray = firstArray.reduce((acc, cur) => (acc += cur), 0);
    let sumSecondArray = secondArray.reduce((acc, cur) => (acc += cur), 0);
    if (sumFirstArray > sumSecondArray) {
      result = sumFirstArray - sumSecondArray;
      console.log(result);
      resultList.push(result);
    } else {
      result = sumSecondArray - sumFirstArray;
      resultList.push(result);
    }
    console.log(resultList);
  }
  for (let i = 0; i < resultList; i++) {
    result = resultList[i];
  }
  return result;
};
console.log(solution([3, 1, 2, 4, 3]));
// console.log(solution([1, 2, 8, 4, 0, 13]));
