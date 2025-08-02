let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const messageEl = document.getElementById("message");
  const attemptsEl = document.getElementById("attempts");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    messageEl.textContent = "⛔ Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (guess < randomNumber) {
    messageEl.textContent = "📉 Too low! Try again.";
  } else if (guess > randomNumber) {
    messageEl.textContent = "📈 Too high! Try again.";
  } else {
    messageEl.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
  }

  attemptsEl.textContent = `Attempts: ${attempts}`;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
}
