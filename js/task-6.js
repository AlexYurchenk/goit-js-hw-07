const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('input',(event) =>{
   if(event.currentTarget.value.length === Number(inputEl.dataset.length ) ){
    inputEl.classList.add("valid")
   }else{
    inputEl.classList.add("invalid") 
   }
} )



/// inputEl.dataset.length
//if(event.currentTarget.value.length === )