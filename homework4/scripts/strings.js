console.log("EX.5 STRINGS");
console.log("-------------------------");

// Create a function that capitalizes the first letter of each word in a given sentence.
function capitalizeLetters(string) {
  if (typeof string != "string" || string.length === 0) {
    throw new Error(
      "Wrong input. Expected string with at least one character."
    );
  }

  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeLetters("povio povio povio"));

// Create a function that prompts the user for their name and age using the [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt). Use string interpolation to create a personalized greeting.

function promptAndGreet() {
  const name = prompt("What is your name?");
  const age = prompt("How old are you?");

  if (!name || !age || isNaN(age)) {
    alert("Invalid input.");
    return;
  }

  alert(`Hello ${name}(${age}), have a great day.`);
}

// Create a function that generates a random quote (out of the pool of 10 quotes that you can decide). Use string interpolation to display the quote.

function getRandomQuote() {
  const quotes = [
    "Leave one wolf alive and the sheep are never safe.",
    "First lesson, stick them with the pointy end.",
    "The Lords of Westeros are sheep. Are you a sheep? No, you’re a dragon. Be a dragon.",
    "Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again. The fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love—illusions. Only the ladder is real. The climb is all there is.",
    "Death is so final, yet life is full of possibilities.",
    "Give us common folk one taste of power and we’re like the lion who tasted man—nothing is ever so sweet again.",
    "Hold the door!",
    "Any man who must say, I am the king, is no true king.",
    "The man who passes the sentence should swing the sword.",
    "You grew up with actors. You learned their craft and you learnt it well. But I grew up with soldiers. I learned how to die a long time ago.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  alert(`Quote of the day is: ${quote}`);

  return quote;
}

console.info(
  "Use buttons in body to see the results of other tasks in this section."
);

console.log("-------------------------");
