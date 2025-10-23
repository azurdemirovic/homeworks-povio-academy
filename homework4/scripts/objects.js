console.log("EX.3 Objects");
console.log("-------------------------");

// Write a program that creates an object representing a car. Add properties like make, model, and year. Print the car's details.

let car = {
  make: "Honda",
  model: "Accord",
  year: 2006,
};

console.log(`Car made by: ${car.make}, Model: ${car.model}, Year: ${car.year}`);

// Write a program that counts the frequency of words in a given sentence and stores the results in an object. Print the object.

// This could easily be changed and shortened with .split method but I wanted to tackle it my way.
function splitIntoWords(string) {
  let words = [];
  let word = "";

  for (let char of string) {
    if (char === " ") {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    } else {
      word += char;
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  return words;
}

function wordFrequency(sentence) {
  let freq = {};
  let words = splitIntoWords(sentence);

  for (let word of words) {
    if (freq[word]) {
      freq[word]++;
    } else {
      freq[word] = 1;
    }
  }

  return freq;
}

console.log(
  wordFrequency("Povio test test Povio Jackson Michael Michael Povio Jackson")
);

console.log("-------------------------");
