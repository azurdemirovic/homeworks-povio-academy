console.log("EX.7 Scopes");
console.log("-------------------------");

// Write a program that demonstrates the difference between block scope and function scope using variables.

function demoScope() {
  if (true) {
    var functionScoped = "OK";
    let blockScoped = "OK";
    const alsoBlockScoped = "OK";

    console.log("Inside block, var:", functionScoped);
    console.log("Inside block, let:", blockScoped);
    console.log("Inside block, const:", alsoBlockScoped);
  }

  console.log("Outside block, var:", functionScoped);
  console.log("Outside block, let: REF ERROR");
  console.log("Outside block, const: REF ERROR");
}

demoScope();

// Create a program that showcases the concept of variable shadowing within nested scopes.

function demoShadowing() {
  let message = "OUTER DECLARED VARIABLE";

  {
    let message = "INNER DECLARED VARIABLE"; 
    console.log("Currently inside of block:", message);
  }

  console.log("Currently outside of block:", message);
}

demoShadowing();

console.log("-------------------------");
