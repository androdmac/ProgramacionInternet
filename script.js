let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector("#guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    alert("Por favor ingresa un número válido entre 1 y 100.");
    guessField.value = "";
    guessField.focus();
    return;
  }

  if (guessCount === 1) {
    guesses.textContent = "Números ingresados: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "¡Felicidades, lo has adivinado!";
    lastResult.style.color = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "¡Lo siento, perdiste! El número era... " + randomNumber;
    lastResult.style.color = "red";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Fallaste, intentalo nuevamente";
    lastResult.style.color = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "El número es más grande...";
    } else {
      lowOrHi.textContent = "El número es más pequeño, jaja";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Jugar de nuevo";
  resetButton.className = "reset-btn";
  document.querySelector(".container").appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  guesses.textContent = "";
  lastResult.textContent = "";
  lowOrHi.textContent = "";
  resetButton.remove();
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
