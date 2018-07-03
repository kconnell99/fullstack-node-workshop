const express = require("express");
const path = require("path");

const compliments = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/compliment", function(req, res) {
  res
    .json({
      compliment: getRandomCompliment()
    })
    .end();
});

const insults = ["you suck.", 
"you're the worst.",
"failure.",
"you'll never succeed in life",
"you dumb af",
"try harder loser",
"no one likes you",
"you don't even go here",
"u trash"];

function getRandomInsult(){
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

app.get("/insult",function(req,res){
    res
        .json({
            insult: getRandomInsult()
        })
    .end();
})



app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");