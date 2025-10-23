console.log("EX.8 Scopes");
console.log("-------------------------");

// Closures seemed interesting to me so I experiemented a little bit.
let numberOfCounters = 0;

function makeCounter(start = 0) {
  let counter = start;

  numberOfCounters++;

  console.log(
    "Counter number: ",
    numberOfCounters,
    "starting from: ",
    start,
    " made."
  );

  function increment() {
    counter += 1;
    console.log("Succesfully incremented the counter!");
    return counter;
  }

  function getValue() {
    console.log("Succesfully retrievied value of the counter!");
    return counter;
  }

  return {
    increment: increment,
    getValue: getValue,
  };
}

const counterExample1 = makeCounter(0);
console.log(counterExample1.increment());
console.log(counterExample1.increment());
console.log(counterExample1.increment());
console.log(counterExample1.getValue());

const counterExample2 = makeCounter(20);
console.log(counterExample2.increment());
console.log(counterExample2.increment());
console.log(counterExample2.increment());
console.log(counterExample2.getValue());


// Second task
console.log("SECOND TASK - BANK ACCOUNT")

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;

  function deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit must be positive.");
      return balance;
    }
    balance = balance + amount;
    console.log("Deposited: ", amount, "New balance: ", balance);
    return balance;
  }

  function withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal must be positive.");
      return balance;
    }
    if (amount > balance) {
      console.error("Insufficient funds.");
      return balance;
    }
    balance = balance - amount;
    console.log("Withdrew: ", amount, "New balance: ", balance);
    return balance;
  }

  function getBalance() {
    console.log("Current balance: ", balance);
    return balance;
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    getBalance: getBalance,
  };
}

const defaultAccount = createBankAccount(100);
defaultAccount.getBalance();
defaultAccount.deposit(50);
defaultAccount.withdraw(30);
defaultAccount.withdraw(200);
defaultAccount.getBalance();

const savingsAccount = createBankAccount(500);
savingsAccount.getBalance();

console.log("-------------------------");