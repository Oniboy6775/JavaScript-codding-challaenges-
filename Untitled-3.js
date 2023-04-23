// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
const solution = (A = []) => {
  let result = 1;
  let newArray = A.sort((a, b) => a - b).filter(
    (e, index, array) => array.indexOf(e) === index && e > 0
  );
  console.log(newArray);
  if (newArray.length < 1) return result;
  let beforeFirstInteger = newArray[0] - 1;
  if (beforeFirstInteger < 0) {
    console.log("here");
    return result;
  }
  if (beforeFirstInteger !== 0 && beforeFirstInteger < Math.min(...newArray)) {
    return (result = beforeFirstInteger);
  } else {
    let index = 0;
    do {
      let element = newArray[index];
      let expectedNextElement = element + 1;
      console.log(index);
      console.log(expectedNextElement);
      console.log(newArray[index + 1]);
      if (expectedNextElement !== newArray[index + 1]) {
        result = expectedNextElement;
        break;
      }
      index++;
    } while (index < newArray.length);
  }

  console.log(result);
  return result;
};

// console.log(solution([1, 3, 6, 4, 1, 2]));
// console.log(solution([1, 2, 4,6]));

// console.log(solution([1, 2, 3]));
// console.log(solution([-1,-3]))
// console.log(solution([-2,-33,-54,-7,0,7,8]));
// console.log(solution([4,5,8,-1,335,6,3]));
console.log(solution([3, 6, 7, 8, , -1, 34, 59, 1, 3, 2, 4]));
