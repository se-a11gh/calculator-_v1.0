let inpt = document.querySelector('.inpt');
let btn = document.querySelectorAll('.btn span');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let result = document.querySelector('.result');
let inpt_result = document.querySelector('.inpt_result');
let btn_clear = document.querySelector('.btn_clear');
let btn_remove = document.querySelector('.remove');


function clearr(params) {
    inpt_result.textContent = " ";
    inpt.value =  " ";
}
btn_clear.addEventListener('click', clearr)


function inpOut() {
    let expression = inpt.value;
    const result = new Function(`return ${expression}`)();
    inpt_result.textContent = result;
}


btn.forEach(el=>{
    el.addEventListener('click', (e)=>{
    inpt.value += e.target.textContent;  
});
})


btn_remove.addEventListener('click', ()=>{
    inpt.value = inpt.value.trim().slice(0, -1);   
});



result.addEventListener('click', ()=>{
    inpOut()
});



