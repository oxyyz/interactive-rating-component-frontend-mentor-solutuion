const firstStepCard = document.querySelector(".card__step_first");
const secondStepCard = document.querySelector(".card__step_second");
const submitButton = document.querySelector(".card__btn");

function selectButton(selectedNumber) {
  const buttons = document.querySelectorAll(".card__btns_btn");

  buttons.forEach((button) => button.classList.remove("active"));

  const selectedButton = document.querySelector(
    `.card__btns_btn:nth-child(${selectedNumber})`
  );
  selectedButton.classList.add("active");

  document.getElementById(
    "selectedText"
  ).textContent = `You selected ${selectedNumber} out of 5`;

  submitButton.disabled = false;
}

function submitChoose() {
  firstStepCard.classList.replace("transform-0", "transform-left");
  secondStepCard.classList.replace("transform-right", "transform-0");

  submitButton.disabled = true;
}
