// const textDisplay = document.querySelector("#text");
// const speedBtn = document.querySelector("#speed");
// const readBtn = document.querySelector(".read");
// const pauseBtn = document.querySelector(".pause");
// const stopBtn = document.querySelector(".stop");
// let currentChar;

// // Rreading Functionality
// readBtn.addEventListener("click", function () {
//   readText(textDisplay.value);
// });

// // Pausing Functionality
// pauseBtn.addEventListener("click", pauseText);

// // Stopping Functionality
// stopBtn.addEventListener("click", stopText);

// // Speed Input Functionality
// speedBtn.addEventListener("input", function () {
//   stopText();
//   readText(utterance.text.substring(currentChar));
// });

/*
https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
*/
// const utterance = new SpeechSynthesisUtterance();
// utterance.addEventListener("end", function () {
//   textDisplay.disabled = false;
// });

// utterance.addEventListener("boundary", function (e) {
//   currentChar = e.charIndex;
// });

// // readText Function
// function readText(testText) {
//   if (speechSynthesis.paused && speechSynthesis.speaking) {
//     return speechSynthesis.resume();
//   }

//   if (speechSynthesis.speaking) return;

//   utterance.text = testText;
//   utterance.rate = speedBtn.value || 1;
//   textDisplay.disabled = true;
//   speechSynthesis.speak(utterance);
// }

// // pauseText Function
// function pauseText() {
//   if (speechSynthesis.speaking) speechSynthesis.pause();
// }

// // stopText Function
// function stopText() {
//   speechSynthesis.resume();
//   speechSynthesis.cancel();
// }

// you got this, Phil

const textDisplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
let currentChar;

// reading Functionality

readBtn.addEventListener("click", () => {
  readText(textDisplay.value);
});

// pause functionality

pauseBtn.addEventListener("click", pauseText);

// stop functionality

stopBtn.addEventListener("click", stopText);

// speed input functionality

speedBtn.addEventListener("input", () => {
  stopText();
  readText(utterance.text.substring(currentChar));
});

const utterance = new SpeechSynthesisUtterance();

utterance.addEventListener("end", () => {
  textDisplay.disabled = false;
});

utterance.addEventListener("boundary", (e) => {
  currentChar = e.charIndex;
});

// the very important readText function

function readText(readText) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }

  if (speechSynthesis.speaking) return;

  utterance.text = readText;
  utterance.rate = speedBtn.value || 1;
  textDisplay.disabled = true;
  speechSynthesis.speak(utterance);
}

// ba wit da ba da dang da dang diggy diggy
// diggy said the boogie said up jump the boogie

// the pauseText function

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

// the stopText function

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
