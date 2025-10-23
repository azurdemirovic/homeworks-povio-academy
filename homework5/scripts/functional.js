console.group("1. task");

function filterOddNumbers(array) {
  console.info("Filtering done!");
  return array.filter(function (num) {
    return num % 2 !== 0;
  });
}

console.log([18, 21, 2, 43, 74, 5, 19]);
console.log(filterOddNumbers([18, 21, 2, 43, 74, 5, 19]));

console.groupEnd();

console.group("2. task");

function sumOfSquares(array) {
  console.info("Sum of squares done!");

  let squares = array.map(function (num) {
    return num * num;
  });

  return squares.reduce(function (acc, current) {
    return acc + current;
  }, 0);
}

console.log([18, 21, 2, 43, 74, 5, 19]);
console.log(sumOfSquares([18, 21, 2, 43, 74, 5, 19]));
console.groupEnd();

console.group("3. task");

function checkPositivity(array) {
  console.info("Positivity check done!");
  return array.every(function (num) {
    return num > 0;
  });
}

console.log([18, -21, 2, 43, -74, 5, 19]);
console.log(
  "All array's elements are positive: ",
  checkPositivity([18, -21, 2, 43, -74, 5, 19])
);

console.log([18, 21, 2, 43, 74, 5, 19]);
console.log(
  "All array's elements are positive: ",
  checkPositivity([18, 21, 2, 43, 74, 5, 19])
);

console.groupEnd();

console.group("4. task");

people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "David", age: 20 },
  { name: "Abel", age: 23 },
];

console.log(JSON.stringify(people));

function sortByAgeAsc(people) {
  console.info("Sorting done!");
  return people.sort(function (a, b) {
    return a?.age - b?.age;
  });
}

console.log(sortByAgeAsc(people));
console.groupEnd();

console.group("5. task");

function findFirstNegative(array) {
  console.info("Search done!");
  return array.findIndex(function (num) {
    return num <= 0;
  });
}

console.log([18, 21, 2, 43, -74, 5, 19]);
console.log(
  "First negative num is on index: ",
  findFirstNegative([18, 21, 2, 43, -74, 5, 19])
);

console.log([18, 21, 2, 43, 74, 5, 19]);
console.log(
  "First negative num is on index: ",
  findFirstNegative([18, 21, 2, 43, 74, 5, 19])
);
console.groupEnd();
