const bill__input = document.getElementById('bill');
const people__input = document.getElementById('people');
const error = document.querySelector('.error__div');
const btns = document.querySelectorAll('.bill__percentage');
const tip = document.getElementById('tipamount');
const total = document.getElementById('total');

bill__input.addEventListener('input', function(){
    let bill = bill__input.value;
    let people = people__input.value;
    if( people == 0 || people == ''){
        error.classList.add('error__div-show');
        people__input.addEventListener('input', evaluatePeople);
    }
});

function evaluatePeople(){ // Check number of people 
    people = people__input.value;
    if( people == 0 ){
        error.classList.add('error__div-show');
    }
    else{
        error.classList.remove('error__div-show');
    }
}

btns.forEach(function(btn){ //Calculate percentages
    btn.addEventListener('click', function(){
        switch(btn.textContent){
            case('5%'):
                individualBill(15); 
            break;
        }
    });
});

function individualBill(number){
    let bill = bill__input.value;
    let people = people__input.value;
    tip.textContent = `$${( number/100*bill/people ).toFixed(2)}`;
    total.textContent = `$${( (bill * (number/100+1))/people ).toFixed(2)}`;
}