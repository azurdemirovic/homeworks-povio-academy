console.log("EX.1 Functions, variables");
console.log("-------------------------");
// Create a function that calculates the area of a rectangle using variables for length and width.

function calculateRectangleArea(length, width) {
  if (length <= 0 || width <= 0) return "Inputs must be greater than 0.";
  return length * width;
}

console.log("Function that calculates rectangle area. (e.g. L5W3, L0W3, L3W0)");
console.log("Area of rectangle: ", calculateRectangleArea(5, 3));
console.log("Area of rectangle: ", calculateRectangleArea(0, 3));
console.log("Area of rectangle: ", calculateRectangleArea(3, 0));

// Create a function that determines if a given number is positive, negative, or zero.

function checkNumber(num) {
  if (num > 0) {
    return "Number is positive.";
  } else if (num < 0) {
    return "Number is negative.";
  } else {
    return "Number is zero.";
  }
}

console.log("Function that checks number's state. (e.g. -2, 120, 0)");
console.log("Given number is: ", checkNumber(-2));
console.log("Given number is: ", checkNumber(120));
console.log("Given number is: ", checkNumber(0));

// Create a function that checks if a year entered by the user is a leap year.

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(
  "Function that check's if year is a leap year. (e.g. 2024, 1600, 1800)"
);
console.log("Given year is a leap year: ", isLeapYear(2024));
console.log("Given year is a leap year: ", isLeapYear(1600));
console.log("Given year is a leap year: ", isLeapYear(1800));

// Create a function that prints the Fibonacci series up to a given number using a for loop, and using recursion.

function fibonacciSeqRecursive(lastStep, num1 = 0, num2 = 1, i = 0) {
  if (i >= lastStep) return;

  console.log(num1);

  fibonacciSeqRecursive(lastStep, num2, num1 + num2, i + 1);
}

console.log(
  "Function that calculates Fibonacci sequence up to a given number with recursion (e.g. 10)"
);
fibonacciSeqRecursive(10);

function fibonacciSeqLoop(lastStep) {
  let num1 = 0,
    num2 = 1;
  for (let i = 0; i < lastStep; i++) {
    console.log(num1);
    let current = num1 + num2;
    num1 = num2;
    num2 = current;
  }
}

console.log(
  "Function that calculates Fibonacci sequence up to a given number with loop (e.g. 12)"
);
fibonacciSeqLoop(12);

// Create a function that calculates the factorial of a number using a for loop*/

function calculateFactorial(number) {
  let finalResult = 1;

  for (let i = 1; i <= number; i++) {
    finalResult *= i;
  }

  return finalResult;
}

console.log("Function that calculates factorial of given number. e.g. 10");
console.log(calculateFactorial(10));

console.log("-------------------------");
