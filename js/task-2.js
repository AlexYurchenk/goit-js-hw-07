const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const ingredientsIdsearchEl = document.querySelector('#ingredients');
for (const ingredient of ingredients){
   const ingredientsLicreateEl = document.createElement('li');
   ingredientsLicreateEl.textContent = ingredient;
   ingredientsIdsearchEl.append(ingredientsLicreateEl)
}