/*A binary gap within a positive integer N is any maximal sequence 

of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

 For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 
 The number 529 has binary representation 1000010001   and contains two binary gaps: one of length
 
 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. 
 
 The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary 
 
 representation 100000 and has no binary gaps.

 Write a function:

 function solution(N);

 that, given a positive integer N, returns the length of its longest binary gap.
 
 The function should return 0 if N doesn't contain a binary gap.

 For example, given N = 1041 the function should return 5, because N has binary representation
 
 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0,
 
 because N has binary representation '100000' and thus no binary gaps.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [1..2,147,483,647].*/

const solution = (N) => {
  const findBinary = () => {
    let binary = "";
    let initialValue = N;
    do {
      let currentValue = parseInt(initialValue / 2);
      let remainder = initialValue - currentValue * 2;
      initialValue = currentValue;
      binary = `${binary}${remainder}`;
    } while (initialValue !== 0);
    binary = binary.split("").reverse().join("");
    return binary;
  };
  let binary = findBinary();
  let lastOneInString = binary.lastIndexOf(1);
  binary = binary.substring(0, lastOneInString);
  let result = 0;
  let splittedArray = binary.split("1");
  splittedArray = splittedArray.filter((e) => e !== "");
  for (let index = 0; index < splittedArray.length; index++) {
    const elementLength = splittedArray[index].length;
    if (elementLength > result) {
      result = elementLength;
    }
  }
  return result;
};
console.log(solution(9)); //worked 1001(ans: 2)
console.log(solution(529)); //worked 1000010001 (ans: 4)
console.log(solution(20)); // worked 10100(ans: 1)
console.log(solution(15)); //worked 1111 (ans: 0)
console.log(solution(32)); //  worked 100000 (ans:0)
console.log(solution(1041)); // worked 10000010001 (ans:5)
