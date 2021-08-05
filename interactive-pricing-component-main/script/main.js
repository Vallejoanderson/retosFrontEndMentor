const switchbox = document.querySelector('.switch');
const checkbox = document.getElementById('checkbox');
const views = document.querySelector('.views__amount-total');
const price = document.querySelector('.fee__price-total');
const slider = document.getElementById('slider');
const time = document.querySelector('.fee__period');
const minviews = 10;
const minprice = 2;
const discount = 0.25;

views.textContent = minviews;
price.textContent = minprice;

slider.addEventListener('change', function(){
	views.textContent = slider.value*minviews;
	price.textContent = slider.value*minprice;
});

/* Toggle background-color */
checkbox.addEventListener('change', function(){
	if (checkbox.checked) {
		console.log("I'm checked");
		switchbox.style.backgroundColor = 'hsl(174, 86%, 45%)';
		price.textContent = slider.value*minprice*12*discount;
		time.textContent = ' /year';
	}
	else{
		switchbox.style.backgroundColor = 'hsl(223, 50%, 87%)';
		price.textContent = slider.value*minprice;
		time.textContent = ' /month';
	}
});

/*Slider progress*/
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}