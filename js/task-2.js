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
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  //   console.log(ingredient);
  return liElement;
});

navElIngredients.append(...elements);
