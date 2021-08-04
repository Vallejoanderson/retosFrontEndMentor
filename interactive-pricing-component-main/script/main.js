const switchbox = document.querySelector('.switch');
const checkbox = document.getElementById('checkbox');

/*Toggle background-color */
checkbox.addEventListener('change', function(){
	if (checkbox.checked) {
		console.log("I'm checked");
		switchbox.style.backgroundColor = 'hsl(174, 86%, 45%)';
	}
	else{
		switchbox.style.backgroundColor = 'hsl(223, 50%, 87%)';
	}
});

/*Slider progress*/
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}