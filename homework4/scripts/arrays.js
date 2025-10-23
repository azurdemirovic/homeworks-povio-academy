console.log("EX.2 Arrays");
console.log("-------------------------");

// Create a function that finds the largest number in an array of numbers. First, write it by yourself and then write another function where you simplify the code with the math module.

function findBiggestNum(array) {
  let biggestNum = -Infinity;

  for (let num of array)
    if (num > biggestNum) {
      biggestNum = num;
    }

  return biggestNum;
}

console.log(
  "Function that finds the biggest number in given array. (e.g. [-8, -13, 2, 25, 1])"
);

console.log(
  "Biggest number in given array is: ",
  findBiggestNum([-8, -13, 2, 25, 1])
);

function findBiggestNumModule(array) {
  let biggestNum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    biggestNum = Math.max(biggestNum, array[i]);
  }

  return biggestNum;
}

console.log(
  "Function that finds the biggest number in given array with math module. (e.g. [11, -17, 32, 2, 21])"
);

console.log(
  "Biggest number in given array is: ",
  findBiggestNumModule([11, -17, 32, 2, 21])
);

// Create a function that removes duplicate elements from an array and prints the resulting array.

function removeDuplicates(array) {
  let noDuplicatesArray = [];

  for (let element of array) {
    if (!noDuplicatesArray.includes(element)) {
      noDuplicatesArray.push(element);
    }
  }

  return console.log("Given array without duplicates: ", noDuplicatesArray);
}

console.log(
  "Function that that removes duplicate elements from an array and prints the resulting array. (e.g. [1, 3, 2, 2, 4, 1, 2, 5, 3])"
);

removeDuplicates([1, 3, 2, 2, 4, 1, 2, 5, 3]);

// Write a program that calculates the average of an array of numbers. Use early returns to handle empty arrays or invalid inputs.

function calculateAvgArray(array) {
  if (!Array.isArray(array)) {
    return "Given input is not an array.";
  }
  if (array.length === 0) {
    return "Given input is an empty array.";
  }
  let sumOfElements = 0;
  for (let num of array) {
    sumOfElements += num;
  }

  return sumOfElements / array.length;
}

console.log(
  "Function that that removes duplicate elements from an array and prints the resulting array. (e.g. [3, 4, 6, 1, 2], empty array, not array)"
);

console.log(
  "Average of numbers in given array is :",
  calculateAvgArray([3, 4, 6, 1, 2])
);
console.log("Average of numbers in given array is :", calculateAvgArray([]));
console.log(
  "Average of numbers in given array is :",
  calculateAvgArray("Povio.")
);

// Create a program that searches for a specific element in an array and returns its index.

function findIndex(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Element not found.";
}

console.log(
  "Function that that searches for a specific element in an array and returns its index. (e.g. [3, 4, 6, 2, 2, 15, 1, 3], 15)"
);
console.log(
  "Given element is in array at: ",
  findIndex([3, 4, 6, 2, 2, 15, 1, 3], 15),
  " index."
);

console.log("-------------------------");
