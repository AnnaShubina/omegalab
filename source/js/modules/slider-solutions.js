import Parallax from "./parallax";
import swiperInit from "./slider";

const sliderSolutionsInit = () => {
	const sliderSolutionsWrap = document.querySelector('.slider--solutions');
	const sliderSolutions = swiperInit(sliderSolutionsWrap);

	if (window.innerWidth > 768) {
		const solutionsWrap = document.querySelector('.js-solution');
		let parallaxSolutionLeft = null;
		let parallaxSolutionRight = null;

		const initSlides = () => {
			const solutionLeft = document.querySelector('.swiper-slide-prev .plate');
			const solutionRight = document.querySelector('.swiper-slide-next .plate');

			if (solutionLeft) {
				parallaxSolutionLeft = new Parallax('x', 0.2, 10, 0, solutionLeft, solutionsWrap, 20, 0);
				parallaxSolutionLeft.init();
			}

			if (solutionRight) {
				solutionRight.setAttribute('data-reverse', '-1');
				parallaxSolutionRight = new Parallax('x', 0.2, 10, 0, solutionRight, solutionsWrap, -20, 0);
				parallaxSolutionRight.init();
			}
		}

		initSlides();

		sliderSolutions.on('slideChangeTransitionStart', function () {
			const solutionsSlides = document.querySelectorAll('.js-solution .swiper-slide');
			solutionsSlides.forEach((slide) => {
				slide.querySelector('.plate').setAttribute("style", `transform: translate(0, 0)`);
				slide.querySelector('.plate').removeAttribute('data-reverse');
			});
			parallaxSolutionLeft.destroy();
			parallaxSolutionRight.destroy();
			initSlides();
		});
	}
}

export default sliderSolutionsInit;
