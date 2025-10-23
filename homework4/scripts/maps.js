console.log("EX.6 MAPS");
console.log("-------------------------");

function countCharFreq(string) {
  if (typeof string !== "string" || string.length === 0) {
    throw new Error("Expected a string with at least one character.");
  }

  const freqMap = new Map();

  for (const char of string) {
    if (char === " ") {
      continue;
    }

    const freqCount = freqMap.get(char) || 0;
    freqMap.set(char, freqCount + 1);
  }

  return freqMap;
}

console.log(
  "Frequency of each character in given string shown in map: ",
  countCharFreq("Java Script @ Povio")
);

function convertCurrency(amount, from, to) {
  // Guard: check amount
  if (typeof amount !== "number" || isNaN(amount) || amount < 0) {
    throw new Error("Amount must be a valid non-negative number.");
  }

  // Rates relative to EUR (base currency)
  const rates = new Map([
    ["EUR", 1],
    ["USD", 1.09],
    ["CAD", 1.47],
    ["GBP", 0.85],
    ["JPY", 163.5],
  ]);

  // Guard: check currencies
  if (!rates.has(from) || !rates.has(to)) {
    const available = Array.from(rates.keys()).join(", ");
    throw new Error(
      `Unsupported currency. Given currency unsupported. Available options are: ${available}`
    );
  }

  const amountInEur = amount / rates.get(from);

  return amountInEur * rates.get(to);
}

console.log("100 EUR into USD:", convertCurrency(100, "EUR", "USD"));
// console.log("100 EUR into USD:", convertCurrency(100, "EUR", "BAM"));

console.log("-------------------------");
