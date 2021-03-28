const counterEl =  document.querySelector('#counter');
const counterSpanEl = document.querySelector('#value');
const counterDecrementBtnEl = counterEl.querySelector('button[data-action="decrement"]');
const counterIncrementBtnEl = counterEl.querySelector('button[data-action="increment"]');
let changecounterSpanEl = Number(counterSpanEl.textContent);
counterDecrementBtnEl.addEventListener('click' , () => {
    changecounterSpanEl -= 1;
    counterSpanEl.innerHTML = changecounterSpanEl;
});
counterIncrementBtnEl.addEventListener('click' , () => {
    changecounterSpanEl += 1;
    counterSpanEl.innerHTML = changecounterSpanEl;
});
