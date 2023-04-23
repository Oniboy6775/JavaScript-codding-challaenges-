// BINARY SEARCH IN JAVASCRIPT
const binarySearch = (array = [], number) => {
  // array: The list of numbers to search
  // number: the number we are looking for

  // sorting array in order
  array = array.sort((a, b) => a - b);
  // function to find the mid index
  let findMid = ({ low, high }) => parseInt(low + (high - low) / 2);
  // setting the initial low, high and mid
  let low = array.indexOf(array[0]);
  let high = array.indexOf(array[array.length - 1]);
  let mid = findMid({ low, high });
  // Selecting the number at the mid index
  let selectedNumber = array[mid];
  // Keep repeating the process if the selected not match
  while (selectedNumber !== number) {
    if (number > selectedNumber) low = mid + 1;
    else high = mid - 1;
    mid = findMid({ low, high });
    selectedNumber = array[mid];
  }
  return `The number ${number} is at position ${mid} when sorted`;
};

console.log(binarySearch([2, 10, 7, 12, 9, 22, 6, 4], 12)); //12 is @ position 6
