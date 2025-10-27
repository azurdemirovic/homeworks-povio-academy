console.group("Fetching Exercise");

const QUOTE_API = {
  url: "https://dummyjson.com/quotes/random",
  parseResponse: (data) => ({
    text: data.quote,
    author: data.author,
  }),
};

const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const quoteContentEl = document.getElementById("quote-content");
const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

function showLoading() {
  loadingEl.classList.remove("hidden");
  errorEl.classList.add("hidden");
  quoteContentEl.classList.add("hidden");
  newQuoteBtn.classList.add("hidden");
  console.log("Showing loading state");
}

function showError() {
  loadingEl.classList.add("hidden");
  errorEl.classList.remove("hidden");
  quoteContentEl.classList.add("hidden");
  newQuoteBtn.classList.remove("hidden");
  console.log("Showing error state");
}

function showQuote(quote) {
  loadingEl.classList.add("hidden");
  errorEl.classList.add("hidden");
  quoteContentEl.classList.remove("hidden");
  newQuoteBtn.classList.remove("hidden");

  quoteTextEl.textContent = quote.text;
  quoteAuthorEl.textContent = quote.author || "Unknown";
  console.log("Showing quote state");
}

async function fetchQuote() {
  showLoading();
  console.log("Fetching quote...");

  try {
    const options = QUOTE_API.headers ? { headers: QUOTE_API.headers } : {};
    const response = await fetch(QUOTE_API.url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const quote = QUOTE_API.parseResponse(data);

    console.log("Quote fetched successfully:", quote);
    showQuote(quote);
  } catch (error) {
    console.error("Error fetching quote:", error);
    showError();
  }
}

newQuoteBtn.addEventListener("click", fetchQuote);

fetchQuote();

console.groupEnd();

