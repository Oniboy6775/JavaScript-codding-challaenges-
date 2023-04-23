/*
Given an array of integers called numbers and an integer target called sum,

return values of the two numbers from the integer array such that they add up to the target.

Note:

1. If there are multiple answers, return the first pair of numbers that add upto the given sum.

Example 1:-
numbers=[1,2,3,4]
sum=5
Output=[1,4]
Explanation:-1+4=5

Example 2:-
numbers=[1]
sum=2
Output=null
Explanation:- Array should have at least two numbers to add to make a sum of 2.

Example 3:-
numbers=[1,-1,2,3]
sum=1
Output=[-1,2]
Explanation:-2+(-1)=1 */
const solution = (A = [], S) => {
  let result = [];
  if (A.length < 2 || !S) {
    result = null;
    return result;
  }
  for (let i = 0; i < A.length - 1; i++) {
    //   for(j=i+1; i<A.length; j++){
    //    const element = A[i]
    //    console.log(element);
    //   }
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] + A[j] === S) {
        console.log(
          "2 number sum exists and here are the numbers:-",
          A[i],
          A[j]
        );
        return [A[i], A[j]];
      } else {
        continue;
      }
    }
  }

  return result;
};
console.log(solution([1, 2, 3, 4], 4));
// console.log(solution([1, -1, 2, 3], 1));
// console.log(solution([1, -1, 2, 3], 3));
