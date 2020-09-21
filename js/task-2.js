const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navElIngredients = document.querySelector('#ingredients');
console.log(navElIngredients);

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  //   console.log(ingredient);
  return liEl;
});

navElIngredients.append(...elements);
