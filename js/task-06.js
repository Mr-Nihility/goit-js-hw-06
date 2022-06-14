// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у
//  вихідні файли завдання.

const inputRef = document.querySelector("#validation-input");

function onInputBlur(event) {
  const objEvent = event.currentTarget;

  if (Number(objEvent.dataset.length) === objEvent.value.length) {
    objEvent.classList.add("valid");
    objEvent.classList.remove("invalid");
  } else {
    objEvent.classList.add("invalid");
    objEvent.classList.remove("valid");
  }
}

inputRef.addEventListener("blur", onInputBlur);
