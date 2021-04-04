const counterEl =  document.querySelector('#counter');
const counterSpanEl = document.querySelector('#value');
const counterDecrementBtnEl = counterEl.querySelector('button[data-action="decrement"]');
const counterIncrementBtnEl = counterEl.querySelector('button[data-action="increment"]');
let changCounterSpanEl = Number(counterSpanEl.textContent);
counterDecrementBtnEl.addEventListener('click' , () => {
    changCounterSpanEl -= 1;
    counterSpanEl.textContent = changCounterSpanEl;
});
counterIncrementBtnEl.addEventListener('click' , () => {
    changCounterSpanEl += 1;
    counterSpanEl.textContent = changCounterSpanEl;
});
