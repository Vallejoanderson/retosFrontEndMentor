const btn = document.getElementById('checkbox');
const body = document.querySelector('.body');
const cards = document.querySelectorAll('.card');
const textcards = document.querySelectorAll('.card__people');
const overview = document.querySelector('.overviewtitle');
const title = document.querySelector('.title__main');
const btntitle = document.querySelector('.button__title');
const switchh = document.querySelector('.switch');

btn.addEventListener('change', function(){
	if(btn.checked){
		darkmode();
	}
	else{
		lightmode();
	}
});

function lightmode()
{
	body.classList.add("body--background-dark");
	cards.forEach(function(card){
		card.classList.add("card--background-light");
	});
	textcards.forEach(function(textcard){
		textcard.classList.add("card__people--color-dark");
	});
	overview.classList.add('overviewtitle--color-dark');
	title.classList.add('title__main--color-dark');
	btntitle.classList.add('button__title--color-dark');
	switchh.classList.add('switch--color-light');
}

function darkmode()
{
	body.classList.remove("body--background-dark");
	cards.forEach(function(card){
		card.classList.remove("card--background-light");
	});
	textcards.forEach(function(textcard){
		textcard.classList.remove("card__people--color-dark");
	});
	overview.classList.remove('overviewtitle--color-dark');
	title.classList.remove('title__main--color-dark');
	btntitle.classList.remove('button__title--color-dark');
	switchh.classList.remove('switch--color-light');
}