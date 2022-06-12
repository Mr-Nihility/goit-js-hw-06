// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

const categoriesListEl = document.querySelector("ul#categories");
console.log("Number of categories:", categoriesListEl.children.length);

[...categoriesListEl.children].forEach((item) => {
  console.log("Category:", item.children[0].textContent);
  console.log("Elements:", item.children[1].children.length);
});
