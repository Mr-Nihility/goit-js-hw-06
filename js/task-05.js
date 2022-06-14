const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handlerInput);

function handlerInput(event) {
  spanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  }
}
