const menuBtn = document.querySelector('.js-menu-open');
const menuCloseBtns = document.querySelectorAll('.js-menu-close');
const menu = document.querySelector('.js-menu');
const html = document.querySelector('html');

const menuInit = () => {
	menuBtn.addEventListener('click', () => {
		menu.classList.add('open');
		html.classList.add('no-scroll');
	});
	menuCloseBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			menu.classList.remove('open');
			html.classList.remove('no-scroll');
		});
	});
}

export default menuInit;
