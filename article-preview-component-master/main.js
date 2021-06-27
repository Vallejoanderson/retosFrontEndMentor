const btn = document.querySelector('.share-button');
const bottom = document.querySelector('.bottom-section');

btn.addEventListener('click', function(){
	bottom.classList.add("show");
	bottom.style.backgroundColor = "hsl(217, 19%, 35%)";
});