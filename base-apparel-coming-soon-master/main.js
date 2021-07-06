const val = document.getElementById('email');
const btn = document.querySelector('.button');
const alert = document.querySelector('.alert');
const alertMessage = document.querySelector('.alert__message');

btn.addEventListener('click', function(){
	if( val.value.includes("@") && val.value.includes(".com") )
	{
		alert.classList.remove('show-alert');
		alertMessage.classList.remove('show-alert');
	}
	else{
		alert.classList.add('show-alert');
		alertMessage.classList.add('show-alert');
	}
});