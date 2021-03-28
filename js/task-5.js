const inputEl =  document.querySelector('#name-input');
const spamEl = document.querySelector('#name-output');
inputEl.addEventListener('input' , (event) => {
  spamEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === ''){
    spamEl.textContent = `незнакомец`
  }
});
