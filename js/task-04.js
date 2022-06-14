/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.

*/

const spanEl = document.querySelector("#value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

incrementEl.addEventListener("click", onIncrementBtnClick);
decrementEl.addEventListener("click", onDecrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  spanEl.textContent = counterValue;
  console.log(spanEl.textContent);
}
function onIncrementBtnClick(event) {
  counterValue += 1;

  spanEl.textContent = counterValue;
  console.log(spanEl.textContent);
}
