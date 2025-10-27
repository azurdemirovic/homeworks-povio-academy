const task1button = document.getElementById("task-1-button");
const task1paragraph = document.getElementById("task-1-paragraph");

const key1 = "storedNumber";
const saved1 = localStorage.getItem(key1);
const parsed1 = parseInt(saved1, 10);

if (!isNaN(parsed1)) {
  task1paragraph.textContent = parsed1;
}

task1button.addEventListener("click", () => {
  const generatedNum = Math.floor(Math.random() * 100000000000) + 1;
  console.log("Number successfully generated (" + generatedNum + ")");
  task1paragraph.textContent = generatedNum;
  localStorage.setItem(key1, generatedNum);
});

const key2 = "storedState";
let saved2 = localStorage.getItem(key2);

const task2button = document.getElementById("task-2-button");
const task2image = document.getElementById("task-2-image");

if (saved2 !== "true" && saved2 !== "false") {
  saved2 = "false";
  localStorage.setItem(key2, saved2);
}

if (saved2 === "true") {
  task2image.classList.add("hidden");
  task2button.textContent = "Show image";
} else {
  task2image.classList.remove("hidden");
  task2button.textContent = "Hide image";
}

task2button.addEventListener("click", () => {
  const isHidden = task2image.classList.toggle("hidden");
  localStorage.setItem(key2, isHidden.toString());
  task2button.textContent = isHidden ? "Show image" : "Hide image";
  console.log("Image succesfully hidden/shown!");
});

const key3 = "storedBGcolor";
let saved3 = localStorage.getItem(key3);

const task3button = document.getElementById("task-3-button");
const divWithBackground = document.getElementById("div-with-background");
divWithBackground.style.transition = "background-color 0.6s ease";

function isValidColor(hex) {
  return /^[0-9A-F]{6}$/i.test(hex);
}

function setRandomColor() {
  const color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  localStorage.setItem(key3, color);
  divWithBackground.style.backgroundColor = `#${color}`;
  console.log("Background color changed succesfully!");
}

if (isValidColor(saved3)) {
  divWithBackground.style.backgroundColor = `#${saved3}`;
} else {
  setRandomColor();
}

task3button.addEventListener("click", setRandomColor);

const task4button = document.getElementById("task-4-button");
const task4input = document.getElementById("task-4-input");
const task4ul = document.getElementById("task-4-ul");

task4button.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = task4input.value;
  if (!li.textContent) {
    return;
  }
  task4ul.appendChild(li);
});

const task5button = document.getElementById("task-5-button");
const task5paragraph = document.getElementById("task-5-paragraph");
const key5 = "clickStorage";
const saved5 = localStorage.getItem(key5);

let clickCounter = saved5 !== null && !isNaN(saved5) ? parseInt(saved5) : 0;
task5paragraph.textContent = clickCounter;

task5button.addEventListener("click", () => {
  task5paragraph.textContent = ++clickCounter;

  const saved3 = localStorage.getItem("storedBGcolor");
  if (saved3) {
    task5paragraph.style.color = `#${saved3}`;
  }
  task5paragraph.classList.add("bump");
  setTimeout(() => task5paragraph.classList.remove("bump"), 200);

  if (clickCounter === 100) {
    alert("EasterEgg.");
  }

  localStorage.setItem(key5, clickCounter);
});
