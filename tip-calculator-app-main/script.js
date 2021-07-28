const bill__input = document.getElementById('bill');
const people__input = document.getElementById('people');
const error = document.querySelector('.error__div');
const btns = document.querySelectorAll('.bill__percentage');
const customPercentage = document.querySelector('.custom');
const tip = document.getElementById('tipamount');
const total = document.getElementById('total');
const reset = document.querySelector('.result__reset');

function evaluatePeople(){ // Check number of people 
    people = people__input.value;
    if( people == 0 || people == ''){
        error.classList.add('error__div-show');
    }
    else{
        error.classList.remove('error__div-show');
    }
}

function individualBill(number = 1){ //Calculate tip and total bill for each person
    let bill = bill__input.value;
    let people = people__input.value;
    tip.textContent = `$${( number/100*bill/people ).toFixed(2)}`;
    total.textContent = `$${( (bill * (number/100+1))/people ).toFixed(2)}`;
}

bill__input.addEventListener('input', function(){ 
    let bill = bill__input.value;
    let people = people__input.value;
    evaluatePeople();
    people__input.addEventListener('input', evaluatePeople);
});

btns.forEach(function(btn){ //Calculate percentages according to each button clicked
    people = people__input.value;
    btn.addEventListener('click', function(){
        btns.forEach(function(btnAux){ // If we click in another button the rest get removed his active color class
        if( btn !==  btnAux){
            btnAux.classList.remove('bill__percentage--status-active');
            }
        });
            btn.classList.add('bill__percentage--status-active');
        if( people != 0 && people != '' ) //Prevent to calculate if there is no people
        {
            switch(btn.textContent){
                case('5%'):
                    individualBill(5);
                    break;
                case('10%'):
                    individualBill(10); 
                    break;
                case('15%'):
                    individualBill(15); 
                    break;
                case('25%'):
                    individualBill(25); 
                    break;
                case('50%'):
                    individualBill(50); 
                    break;
                default:
                    btn.addEventListener('input', function(){
                        individualBill(btn.value);
                    });
                    break;
            }
        }
    });
});

reset.addEventListener('click', function(){ // Reset button
    bill__input.value = '';
    people__input.value = '';
    tip.textContent = '$0.00';
    total.textContent = '$0.00';
    customPercentage.value = '';
});