const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputInpt);
textRef.style.fontSize = `${inputRef.value}px`;

function onInputInpt(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
