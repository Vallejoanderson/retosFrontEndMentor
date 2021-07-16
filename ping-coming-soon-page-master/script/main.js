const btn = document.querySelector('.notification-section__button');
const error__message = document.querySelector('.error__message');

btn.addEventListener('click', function(){
	const message = document.querySelector('.notification-section__email');
	if( message.value.includes('@') && message.value.includes('.com') ){
		error__message.classList.remove('error__message--display-show');
	}
	else{
		error__message.classList.add('error__message--display-show');
	}
});