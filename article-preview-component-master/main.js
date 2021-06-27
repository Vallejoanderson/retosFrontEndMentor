const btn = document.querySelector('.share-button');
const bottom = document.querySelector('.bottom-section');

btn.addEventListener('click', function(){
	bottom.classList.toggle("show");
});