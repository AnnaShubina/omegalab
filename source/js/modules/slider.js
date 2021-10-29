import Swiper from "../plugins/swiper.min";

const swiperInit = (elem) => {
	if (elem.classList.contains('slider--solutions')) {
		return new Swiper('.slider--solutions .swiper-container', {
			slidesPerView: 1,
			navigation: {
				nextEl: '.slider--solutions .swiper-button-next',
				prevEl: '.slider--solutions .swiper-button-prev',
			},
			breakpoints: {
				640: {
					slidesPerView: 'auto',
					spaceBetween: 30,
					centeredSlides: true,
					initialSlide: 1,
					allowTouchMove: false,
				},
			}
		});
	}
	if (elem.classList.contains('slider--cases')) {
		return new Swiper('.slider--cases .swiper-container', {
			slidesPerView: 1,
			loop: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: '.slider--cases .swiper-button-next',
			},
		});
	}
	if (elem.classList.contains('slider--business')) {
		return new Swiper('.slider--business .swiper-container', {
			slidesPerView: 'auto',
			resistance: true,
			resistanceRatio: 0,
			freeMode: true,
			freeModeMomentumBounce: false,
		});
	}
}

export default swiperInit;
