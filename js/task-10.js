/* 

Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input
 і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
 скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX.
Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
 всі створені елементи.

*/
const ref = {
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  holder: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
ref.createBtn.addEventListener("click", oneCresteBtnclick);

function oneCresteBtnclick() {
  ref.holder.innerHTML = "";

  for (let index = 1; index <= ref.input.value; index++) {
    let div = `<div style="width: ${30 + index * 10}px; height: ${
      30 + index * 10
    }px; background-color: ${getRandomHexColor()};"></div>`;
    ref.holder.insertAdjacentHTML("beforeend", div);
  }
}

ref.destroyBtn.addEventListener("click", () => {
  ref.holder.innerHTML = "";
});
