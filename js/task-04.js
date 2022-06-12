/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.


*/
const counterValue = document.querySelector("#value");
console.log(counterValue.textContent);

const decrementEl = document.querySelector('[data-action="decrement"]');

decrementEl.addEventListener("click", () => {
  counterValue.textContent -= 1;
  console.log(counterValue.textContent);
});
const incrementEl = document.querySelector('[data-action="increment"]');

incrementEl.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
  console.log(counterValue.textContent);
});
