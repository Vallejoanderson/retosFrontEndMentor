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