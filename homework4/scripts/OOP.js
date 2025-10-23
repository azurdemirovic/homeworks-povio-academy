console.log("EX.10 OOP");
console.log("-------------------------");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getDetails() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }

  printDetails() {
    console.log(this.getDetails());
  }
}

const book1 = new Book(
  "On the Genealogy of Morals",
  "Friedrich Nietzsche",
  1887
);
const book2 = new Book("The Sublime Object of Ideology", "Slavoj Žižek", 1989);
const book3 = new Book("Living in the End Times", "Slavoj Žižek", 2010);

book1.printDetails();
book2.printDetails();
book3.printDetails();

// STACK IMPLEMENTATION

console.info("Stack implementation: ");

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    }
    return this.items.pop();
  }

  top() {
    if (this.isEmpty()) {
      throw new Error("No top element - stack is empty.");
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push("Azur");
stack.push("Povio");
stack.push("#academy");

console.log("Top element:", stack.top());
console.log("Stack size:", stack.size());
console.log("Popped:", stack.pop());
console.log("Stack size after pop:", stack.size());
console.log("Top element:", stack.top());
console.log("Is stack empty?", stack.isEmpty());

console.info("Shape hierarchy implementation: ");

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  getArea() {
    throw new Error("getArea() must be implemented in subclass.");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle("red", 5);
const square = new Square("blue", 4);
const triangle = new Triangle("green", 6, 3);

console.log(
  `Circle color: ${circle.getColor()}, area: ${circle.getArea().toFixed(2)}`
);
console.log(`Square color: ${square.getColor()}, area: ${square.getArea()}`);
console.log(
  `Triangle color: ${triangle.getColor()}, area: ${triangle.getArea()}`
);

console.log("-------------------------");
