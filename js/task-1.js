const navElItem = document.querySelectorAll('.item');
console.log(`В списке ${navElItem.length} категории.`);

navElItem.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
