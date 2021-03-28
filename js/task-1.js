const selectedByIdCategoriesEl = document.querySelector('#categories');
const categoriesItemSearchEl = selectedByIdCategoriesEl.children.length;
console.log(`В списке ${categoriesItemSearchEl} категории.`);
const selectedByClassItemEl = document.querySelectorAll('.item');


for (const item of selectedByClassItemEl ){
  const titleSelectedEl = item.firstElementChild.textContent;
   const listSelectedEl = item.lastElementChild.children.length
   console.log(`Категшория :${titleSelectedEl}
   Количество элементов: ${listSelectedEl}`);
}

