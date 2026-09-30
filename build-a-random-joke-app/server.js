const express = require("express");
const app = express();
const port = 3000;

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "There are only 10 kinds of people in the world: those who understand binary and those who don't.",
  "I told my computer I needed a break, and it said \"No problem, I'll go to sleep.",
  "Why do Java developers wear glasses? Because they don't see sharp.",
];

app.get("/", (req, res) => {
  res.send("Welcome to the Random Joke Server! Visit /joke to get a random joke.");
});

app.get("/joke", (req, res) => {
    function randomItem(arr) {
        if (!Array.isArray(arr) || arr.length === 0) return undefined;
        return arr[Math.floor(Math.random() * arr.length)];
    }
  res.send(randomItem(jokes));
});

app.get("/about", (req, res) => {
  res.send("This Random Joke Server was built with Express.js");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});