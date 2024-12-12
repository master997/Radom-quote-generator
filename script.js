"use strict";

const quotes = [
  // Monkey D. Luffy (One Piece)
  "Power isn’t determined by your size, but by the size of your heart and dreams. — Monkey D. Luffy",

  // Sosuke Aizen (Bleach)
  "You fear that which you cannot comprehend. That is why you are weak. Fear is the only darkness. — Sosuke Aizen",

  // Madara Uchiha (Naruto)
  "Man seeks peace, yet at the same time yearning for war. Those are the two realms belonging solely to man. — Madara Uchiha",

  // Naruto Uzumaki (Naruto)
  "When people are protecting something truly special to them, they truly can become as strong as they can be. — Naruto Uzumaki",

  // Ichigo Kurosaki (Bleach)
  "The difference in strength… what about it? Do you think I should give up just because you’re stronger than me? — Ichigo Kurosaki",

  // Gojo Satoru (Jujutsu Kaisen)
  "I have no interest in weaklings pretending to be strong. Strength is more than just raw power. — Gojo Satoru",

  // Ryomen Sukuna (Jujutsu Kaisen)
  "What is power? It's the ability to crush everything in your path with no hesitation. — Ryomen Sukuna",

  // James Lee (Lookism)
  "True power doesn't come from violence; it comes from being able to control it. — James Lee",

  // Gun Park (Lookism)
  "Your enemy is not the one in front of you. It is your own weakness. — Gun Park",

  // Daniel Park (Lookism)
  "It's not about how many times you fall; it's about how many times you rise after you fall. — Daniel Park",

  // Roronoa Zoro (One Piece)
  "I have no regrets. If I die now, so be it. But I will die reaching for my dream. — Roronoa Zoro",

  // Sasuke Uchiha (Naruto)
  "What I seek is neither hatred nor vengeance… it is the truth. — Sasuke Uchiha",

  // Obito Uchiha (Naruto)
  "No matter what happens, you think only of yourself. You think the world revolves around you. That's why you'll always be alone. — Obito Uchiha",

  // Pain (Naruto)
  "Too many people have died here… Their pain is what helped me grow up. — Pain",

  // Batman (DC Comics)
  "A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy's shoulders to let him know the world hadn't ended. — Batman",

  // Deadpool (Marvel Comics)
  "The worst part about being immortal? Outliving everyone you've ever loved. — Deadpool",

  // Arthur Leywin (The Beginning After the End)
  "The strongest people aren't those who always win, but those who never back down from a challenge. — Arthur Leywin",
];

//Dom Elements
const mainHeader = document.querySelector(".main-header");
const div = document.querySelector(".random-quote");
const generateBTN = document.querySelector(".generateBTN");
const quoteDisplay = document.querySelector(".quote-display");

//random quote function
const generatefn = function () {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  console.log(quoteIndex);
  const quote = quotes[quoteIndex];
  console.log(quote);
  quoteDisplay.textContent = quote;
};

generateBTN.addEventListener("click", function () {
  generatefn();
});
