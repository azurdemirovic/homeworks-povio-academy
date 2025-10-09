// Refactor the functions below as you think is the best for readability.

```javascript
function calculateTotalPrice(items) {
  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    let itemTotal = items[i].price * items[i].quantity;

    if (items[i].quantity > 10) {
      itemTotal *= 0.9;
    }

    if (items[i].category === "sale") {
      itemTotal *= 0.8;
    }

    totalPrice += itemTotal;
  }

  return totalPrice;
}
``````javascript
function processUser(user) {
  if (user?.info?.personal?.age > 18) {
    // Perform some operations with the user
    console.log("Processing user:", user);
  }
}
``````javascript
function isStudentWithGoodGrades(person) {
  if (
    person.age >= 18 &&
    person.age <= 25 &&
    person.educationLevel === "college" &&
    person.grades >= 80
  ) {
    return true;
  }
  return false;
}
``````javascript
function calculateExpression(a, b, c, d) {
  const result = a + b - c * d;
  return result;
}
``````javascript
function processData(data) {
  const { name, age, city } = data;

  // Rest of the code that uses name, age, city...
}
``````javascript
function calculateTotalPrice(items) {
  if (!Array.isArray(items) || items.length <= 0) {
    return "Wrong input. Array with at least one item expected.";
  }

  let totalPrice = 0;

  for (let item of items) {
    if (item?.price > 0 && item?.quantity > 0) {
      totalPrice += item.price * item.quantity;
    }
  }
  return totalPrice;
}
```;
