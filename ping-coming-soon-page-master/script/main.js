const btn = document.querySelector('.notification-section__button');
const error__message = document.querySelector('.error__message');
const message = document.querySelector('.notification-section__email');

btn.addEventListener('click', function(){
	if( message.value === ''){
		error__message.classList.add('error__message--display-show');
	}
});