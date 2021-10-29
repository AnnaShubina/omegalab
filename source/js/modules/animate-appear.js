const animatedBlocks = document.querySelectorAll('.animation-wave');
const animate = () => {
	animatedBlocks.forEach((item) => {
		const bottomOffset = window.pageYOffset + item.getBoundingClientRect().top;
		const windowBottom = window.pageYOffset + document.documentElement.clientHeight;
		if (bottomOffset < windowBottom) {
			item.classList.add('is-ready');
		} else  {
			item.classList.remove('is-ready');
		}
	});
}

const appearInit = () => {
	window.addEventListener('scroll', animate);
	document.addEventListener("DOMContentLoaded", animate);
}

export default appearInit;
