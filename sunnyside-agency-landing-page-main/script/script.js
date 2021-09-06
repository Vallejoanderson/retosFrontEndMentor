const iconbar = document.querySelector('.header__bar');
const menubar = document.querySelector('.header__options');

iconbar.addEventListener('click', showmenu);

function showmenu(){
	menubar.classList.toggle('header__options-display--block');
}