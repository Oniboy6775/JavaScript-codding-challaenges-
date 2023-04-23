/* Write a function:

 function solution(A);

 that, given an array A of N integers, returns the smallest positive
 
 integer (greater than 0) that does not occur in A.

 For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

 Given A = [1, 2, 3], the function should return 4.

 Given A = [−1, −3], the function should return 1.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [1..100,000];
 
 each element of array A is an integer within the range [−1,000,000..1,000,000].*/
const solution = (A = []) => {
  let result = 1;
  // console.log(A);
  const sortedArray = A.sort((a, b) => a - b).filter(
    (e, index, array) => array.indexOf(e) == index && e > 0
  );
  if (sortedArray.length < 1) return result;
  // console.log(sortedArray);
  let possibleIntegers = sortedArray.filter(
    (e, index, array) => e + 1 != array[index + 1]
  );
  // console.log(possibleIntegers);
  let B = [];
  if (sortedArray[0] < possibleIntegers[0] + 1 && sortedArray[0] != 1) {
    let i = 1;
    do {
      B.push(i);
      i++;
    } while (i != possibleIntegers[0]);
    result = Math.min(...B);
    return result;
  } else {
    result = possibleIntegers[0] + 1;
    return result;
  }
};
console.log(solution([1, 0, -1, 2, 100, 1829, 7332, 23, 6.5, 4])); // ans 3
console.log(solution([-1.22, 0, 8, 5, 6, 10])); // ans 1
console.log(solution([1, 3, 6, 4, 0, 1, 2])); //ans 5
console.log(solution([1, 2, 3])); //ans 4
console.log(solution([-1, -3])); // ans 1
console.log(solution([2, 4, 5, 7, 6])); // ans 1
