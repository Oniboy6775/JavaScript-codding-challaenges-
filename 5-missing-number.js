/*
An array A consisting of N different integers is given. The array contains integers in 

the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/
// [2,3,1,5]
// const solution = (A = []) => {
//  const solution = (A = []) => {
//    let result = 0;
//    let sting = A.join("");

//    console.log(sting);
//    for (let index = 0; index < A.length; index++) {
//      const element = A[index];
//      console.log(A[index]);
//      // console.log(element);
//      let search = A.find((e) => e + 1 == 1);
//      console.log(element);
//      if (!search) result = element + 1;
//    }
//    return result;
//  };
//  // [(2, 3, 1, 5)];[5, 6, 8, 9];
// // };
const solution = (A) => {
  let result = 1;
  let sortedArray = A.sort((a, b) => a - b);
  if (sortedArray.length < 1) {
    sortedArray.push(0);
  }
  if (A[0] != 1) {
    result = 1;
    return result;
  }
  for (let loopIndex = 0; loopIndex < sortedArray.length; loopIndex++) {
    let element = A[loopIndex];
    let isMissing = element + 1 !== A[loopIndex + 1];
    if (isMissing) {
      result = A[loopIndex] + 1;
      break;
    }
    result = A[loopIndex] + 1;
  }
  return result;
};
console.log(solution([2, 3, 1, 5]));//4
console.log(solution([2]));// 1
console.log(solution([2, 2]));// 1
console.log(solution([5, 4, 5]));//1
console.log(solution([]));// 1
