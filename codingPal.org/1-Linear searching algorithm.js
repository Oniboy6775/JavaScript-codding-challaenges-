/*
You are given an array of values. You are also given a value called searchValue.

Your job is to write a program to search for the given value using the linear search algorithm.

In the end return the index of the value we are looking for if found otherwise return -1.

Look at the below examples to understand the problem clearly.

Example 1:

array=[11,-2,23,-4,5,16,17]
value=5
output=4
Exaplanation= The value 5 is present at index 4 in the array. Hence the output is 4.

Example 1:

array=[1,2,3,4,5,6,7]
value=20
output=-1
Exaplanation= The value 5 is not present in the array. Hence the output is -1.
*/
const solution = (A = [], S) => {
  let result = -1;
  if (A.length < 1 || !S) return result;
  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    if (element === S) {
      result = i;
      break;
    }
  }
  return result;
};
console.log(solution([1, 2, 3, 4, 5], 6));
