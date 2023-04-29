
const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Success is a journey not a destination.",
    author: "Ben Sweetland "
  },
  {
    text: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle "
  },
  {
    text: "Love yourself first and everything else falls into place.",
    author: "Lucille Ball"
  },
  {
    text: "If you carry joy in your heart, you can heal any moment.",
    author: "Carlos Santana "
  },
  {
    text: "Nothing is impossible. The word itself says, 'I'm possible!'",
    author: "Audrey Hepburn "
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: " Mark Twain"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById("text").textContent = quote.text;
  document.getElementById("author").textContent = quote.author;
  // update tweet quote link
  const tweetLink = document.getElementById("tweet-quote");
  tweetLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" ${quote.author}`)}`;

}
function getNewQuote() {
  displayQuote();
}


window.addEventListener("DOMContentLoaded", displayQuote);

