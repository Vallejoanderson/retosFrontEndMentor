const btn = document.getElementById('button');
const fields = document.querySelectorAll('.register-section__data');

fields.forEach( function(field) {
	const field__content = field.querySelector('input');
	const warning__text = field.querySelector('.warning');
	btn.addEventListener('click', function(){
		if( field__content.classList.contains('email')){ /*Check if we're in the email class*/
			if( field__content.value.includes('@') && field__content.value.includes('.com'))
			{
				warning__text.classList.remove('show');
			}
			else{
				warning__text.classList.add('show');
			}
		}
		else{ /* For other fields use this path */
			if (field__content.value === ""){
				warning__text.classList.add('show');
			}
			else{
				warning__text.classList.remove('show');
			}
		}			
	});
});