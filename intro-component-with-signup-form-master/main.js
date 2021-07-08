const btn = document.getElementById('button');
const fields = document.querySelectorAll('.register-section__data');

fields.forEach( function(field) {
	const field__content = field.querySelector('input');
	const warning_text = field.querySelector('.warning');
	btn.addEventListener('click', function(){
		if (field_content !== null && field__content.value === ""){
			warning__text.classList.add('show');
		}
		else{
			warning__text.classList.remove('show');
		}			
	});
});