import swiperInit from "./modules/slider";
import calcDocumentHeight from "./modules/height";
import initCustomSelect from "./modules/custom-select"
import menuInit from "./modules/menu";
import sliderSolutionsInit from "./modules/slider-solutions";
import appearInit from "./modules/animate-appear";
import ScrollTo from "./modules/scroll-to";
import DisableOutline from "./modules/disable-outline";
import Parallax from "./modules/parallax";
import Popup from "./modules/popup";

menuInit();
calcDocumentHeight();
initCustomSelect();
sliderSolutionsInit();

const DisableBodyOutline = new DisableOutline(document.body);
DisableBodyOutline.init();

const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider) => swiperInit(slider));


const menuItems = document.querySelectorAll('.nav__link');
menuItems.forEach((item) => {
	const scrollTo = new ScrollTo(item);
	scrollTo.init();
});

const popupBtns = document.querySelectorAll('.js-popup-open');
popupBtns.forEach((item) => {
	const popup = new Popup(item);
	popup.init();
});

if (window.innerWidth > 768) {
	appearInit();

	const casesWrap = document.querySelector('.js-cases');
	const cases = document.querySelectorAll('.js-cases .cardBox');
	cases.forEach((item) => {
		const parallaxCase = new Parallax('x', 0.1, 10, 0, item, casesWrap, 0, 0);
		parallaxCase.init();
	})
}
