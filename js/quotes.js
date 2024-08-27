const quotes = [
    {
        quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
    },
    {
        quote: "Remember, you’re the one who can fill the world with sunshine.",
    },
    {
        quote: "Where there is a will there is a way.",
    },
    {
        quote: "Tough times never last, but tough people do.",
    },
    {
        quote: "Until death, it is all life. ",
    },
    {
        quote: "Don't dream, Be it ",
    },
    {
        quote: "This too shall pass away.",
    },
    {
        quote: "Nothing ventured, nothing gained.",
    },
    {
        quote: "You cannot be happy every day. But there are happy things every day",
    },
    {
        quote: "When life gives you lemons, make lemonade.",
    },
];

const quote = document.querySelector("#quotes span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;