console.log("EX.9 Errors");
console.log("-------------------------");

function safeDivision(num1, num2) {
  try {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Wrong input type. Expected numbers as input.");
    }
    if (num2 === 0) {
      throw new Error("Division by zero is not possible.");
    }
    return num1 / num2;
  } catch (error) {
    console.error("Error: ", error.message);
    return null;
  }
}

console.log(safeDivision(10, 2));
safeDivision(8, 0);
safeDivision("5", 2);
