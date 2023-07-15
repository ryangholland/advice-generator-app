const diceBtn = document.querySelector("[data-dice]");
const adviceID = document.querySelector("[data-advice-id]");
const adviceText = document.querySelector("[data-advice-text]");

diceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceID.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
    });
});
