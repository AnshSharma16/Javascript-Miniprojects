// Get references to the button and quote display elements
const btn = document.querySelector(".generate-btn");
const quoteDisplay = document.getElementById("quote");

// Array of quotes
const quotes = [
    "Man is a featherless biped. ~ Plato",
    "I came, I saw, I conquered. ~ Julius Caesar",
    "Nothing is impossible for those who'll try. ~ Alexander of Macedon",
    "If you have a garden and a library, you have everything you need. ~ Cicero",
    "The best revenge is to be unlike him who performed the injury. ~ Marcus Aurelius",
    "Happiness depends upon ourselves. ~ Aristotle",
    "The unexamined life is not worth living. ~ Socrates"
];

// Function to generate and display a random quote
function generateQuote() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the random quote
    quoteDisplay.textContent = quotes[randomIndex];
}

// Add event listener to the button
btn.addEventListener("click", generateQuote);

