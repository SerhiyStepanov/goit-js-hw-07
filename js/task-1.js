const navElItems = document.querySelectorAll('.item');
// console.log(navElItems.length);

const navElItemTitle = document.querySelector('h2');
// console.log(`Категория: ${navElItemTitle.textContent}`);

const navElCount = document.querySelector('.item');
// console.log(`Количество элементов: ${navElCounnt.lastElementChild.children.length}`,

const getElItem = ul => `В списке ${navElItems.length} категории.`;
console.log(getElItem());

const getElTitle = () => `Категория: ${navElItemTitle.textContent}`;
console.log(getElTitle());

const getElItemCount = () =>
  `Количество элементов: ${navElCount.lastElementChild.children.length}`;
console.log(getElItemCount());
