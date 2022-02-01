// Check if flashcards already exist
let words;
let descriptions;

if (localStorage.getItem('words')) {
  words = JSON.parse(localStorage.getItem('words'));
} else {
  let words = [];
}

if (localStorage.getItem('descriptions')) {
  descriptions = JSON.parse(localStorage.getItem('descriptions'));
} else {
  let descriptions = [];
}

console.log(words);
console.log(descriptions);

// Add new flashcard
const wordField = document.getElementById('word');
const descriptionField = document.getElementById('description');
const form1 = document.getElementById('form1');

function addFlashcard(e) {
  e.preventDefault();

  words.push(wordField.value);
  descriptions.push(descriptionField.value);

  localStorage.setItem('words', JSON.stringify(words));
  localStorage.setItem('descriptions', JSON.stringify(descriptions));

  wordField.value = null;
  descriptionField.value = null;
}

form1.addEventListener('submit', addFlashcard);

// Practice Flashcards
// Draw a flashcard
const draw = document.getElementById('draw');
const form2 = document.getElementById('form2');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawFlashcard() {
  console.log(`draw flashcard`);
  cardsDescriptions = JSON.parse(localStorage.getItem('descriptions'));
  cardsRange = cardsDescriptions.length;
  cardNumber = getRandomInt(0, cardsRange - 1);
  console.log(cardNumber);
  console.log(cardsDescriptions[cardNumber]);

  const div = document.getElementById('practice');
  const drawDescription = document.createElement('h3');
  drawDescription.innerHTML = `Description: ${cardsDescriptions[cardNumber]}`;
  div.appendChild(drawDescription);
}
draw.addEventListener('click', drawFlashcard);

function checkAnswer(e) {
  e.preventDefault();
  console.log('check answer');
  console.log(cardNumber);

  //compare value from input with value of words[cardNumber]
  const answer = document.getElementById('answer');
  console.log(answer.value);
  if (answer.value == words[cardNumber]) {
    console.log('success');
  } else {
    console.log('fail');
  }
}

form2.addEventListener('submit', checkAnswer);
