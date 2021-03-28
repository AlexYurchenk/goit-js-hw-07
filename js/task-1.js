const selectedByIdCategoriesEl = document.querySelector('#categories');
const categoriesItemSearchEl = selectedByIdCategoriesEl.children.length;
console.log(`В списке ${categoriesItemSearchEl} категории.`);
const selectedByClassItemEl = document.querySelectorAll('.item');

selectedByClassItemEl.forEach(item =>{
  const titleSelectedEl = item.firstElementChild.textContent;
  const listSelectedEl = item.lastElementChild.children.length;
  console.log(`Категория: ${titleSelectedEl},Количество элементов: ${listSelectedEl}`)
})