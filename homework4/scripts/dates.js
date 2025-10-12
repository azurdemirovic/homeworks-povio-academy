console.log("EX.4 DATES");
console.log("-------------------------");

// Create a function that calculates the number of days between two given dates

function calculateDays(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Guard: proper type of input
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    throw new Error("Invalid date(s) provided.");
  }

  // Guard: dates are the same
  if (d1.getTime() === d2.getTime()) {
    return "Dates are equal";
  }

  // Guard:  order of dates
  const start = new Date(Math.min(d1, d2));
  const end = new Date(Math.max(d1, d2));

  const diffInMs = end - start;
  const msInDay = 1000 * 60 * 60 * 24;

  return diffInMs / msInDay;
}

console.log(calculateDays("2025-01-01", "2025-01-12"));
console.log(calculateDays("2025-01-12", "2025-01-01"));
console.log(calculateDays("2025-01-01", "2025-01-01"));
// console.log(calculateDays("not-a-date", "2025-01-12"));

// Create a function that determines the day of the week for a given date.

function getDayOfWeek(date) {
  const d = new Date(date);

  let isValidDate = d instanceof Date && !isNaN(d.getTime());

  // Guard: wrong input type
  if (!isValidDate) {
    throw new Error("Wrong input. Date input expected!");
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[d.getDay()];
}

console.log(getDayOfWeek("2025-01-12"));
console.log(getDayOfWeek(new Date("2025-01-13")));
// console.log(getDayOfWeek("invalid-date"));

// Create a function that adds a number of days to a date and returns the new date. Can you enhance the function by allowing the user to pass in the unit to add? Eg. if the signature is `addToDate(date, amount, unit)`, then `addToDate(date, 1, 'seconds')` adds 1 second to the date, and `addToDate(date, 10, 'hours)` adds 10 hours to the date.

function addUnitToDate(date, amount, unit) {
  const d = new Date(date);

  // Guard: check date validity
  if (isNaN(d.getTime())) {
    throw new Error("Invalid input provided.");
  }

  // Guard: check amount validity
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  const unitToMs = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
    weeks: 1000 * 60 * 60 * 24 * 7,
  };

  // Guard: proper unit
  if (!(unit in unitToMs)) {
    throw new Error("Invalid unit.");
  }

  const newTime = d.getTime() + amount * unitToMs[unit];
  return new Date(newTime);
}

console.log(addUnitToDate("2025-01-01", 5, "days"));
console.log(addUnitToDate("2025-01-01T12:00:00", 3600, "seconds"));
console.log(addUnitToDate("2025-01-01", 1, "weeks"));
// console.log(addUnitToDate("2025-01-01", 5, "povio"));

console.log("-------------------------");