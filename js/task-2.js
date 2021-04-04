const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const ingredientsIdsearchEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient =>{
  const ingredientsLicreateEl = document.createElement('li');
  ingredientsLicreateEl.textContent = ingredient;
  ingredientsIdsearchEl.append(ingredientsLicreateEl)
});