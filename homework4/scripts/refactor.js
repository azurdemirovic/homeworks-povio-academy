// Refactor the functions below as you think is the best for readability.

```javascript
function calculateDiscountedPrice(items) {
  const bulkDiscountThreshold = 10;
  const bulkDiscountRate = 0.9;
  const saleDiscountRate = 0.8;

  let totalPrice = 0;

  for (const { price, quantity, category } of items) {
    let itemTotal = price * quantity;

    if (quantity > bulkDiscountThreshold) {
      itemTotal *= bulkDiscountRate;
    }

    if (category === "sale") {
      itemTotal *= saleDiscountRate;
    }

    totalPrice += itemTotal;
  }

  return totalPrice;
}
``````javascript
function processUser(user) {
  if (user?.info?.personal?.age <= 18) return;
  // process user
  console.log("Processing user:", user);
}
``````javascript
function isStudentWithGoodGrades(person) {
  const { age, educationLevel, grades } = person;

  return (
    age >= 18 &&
    age <= 25 &&
    educationLevel === "college" &&
    grades >= 80
  );
}
``````javascript
function calculateExpression(a, b, c, d) {
  return a + b - c * d;
}
``````javascript
function processData(data) {
  const { name, age, city } = data;

  // Rest of the code that uses name, age, city...
}
``````javascript
function calculateTotalPrice(items) {
  if (!Array.isArray(items) || items.length <= 0) {
    throw new Error("Expected a non-empty array of items");
  }

  let totalPrice = 0;

  for (const { price, quantity } of items) {
    if (price > 0 && quantity > 0) {
      totalPrice += price * quantity;
    }
  }
  return totalPrice;
}
```;
