const bill__input = document.getElementById('bill');
const people__input = document.getElementById('people');
const error = document.querySelector('.error__div');

bill__input.addEventListener('input', function(){
    let bill = bill__input.value;
    let people = people__input.value;
    if( people == 0 || people == ''){
        error.classList.add('error__div-show');
        people__input.addEventListener('input', console.log('Hola'));
    }
});

function evaluatePeople(){
    console.log('Hola');
    people = people__input.value;
    if( people == 0 ){
        error.classList.add('error__div-show');
    }
    else{
        error.classList.remove('error__div-show');
    }
}