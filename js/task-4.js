const counterEl =  document.querySelector('#counter');
const counterSpanEl = document.querySelector('#value');
const counterDecrementBtnEl = counterEl.querySelector('button[data-action="decrement"]');
const counterIncrementBtnEl = counterEl.querySelector('button[data-action="increment"]');
let changcounterSpanEl = Number(counterSpanEl.textContent);
counterDecrementBtnEl.addEventListener('click' , () => {
    changcounterSpanEl -= 1;
    counterSpanEl.textContent = changcounterSpanEl;
});
counterIncrementBtnEl.addEventListener('click' , () => {
    changcounterSpanEl += 1;
    counterSpanEl.textContent = changcounterSpanEl;
});
