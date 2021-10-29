import swiperInit from "./modules/slider";
import calcDocumentHeight from "./modules/height";
import initCustomSelect from "./modules/custom-select"
import menuInit from "./modules/menu";
import sliderSolutionsInit from "./modules/slider-solutions";
import appearInit from "./modules/animate-appear";
import ScrollTo from "./modules/scroll-to";
import DisableOutline from "./modules/disable-outline";
import TextareaResize from "./modules/textarea-resize";
import Parallax from "./modules/parallax";

menuInit();
calcDocumentHeight();
initCustomSelect();
sliderSolutionsInit();

const DisableBodyOutline = new DisableOutline(document.body);
DisableBodyOutline.init();

const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider) => swiperInit(slider));


const textareaEl = document.querySelector('.textarea-resize');
const textarea = new TextareaResize(textareaEl);
textarea.init();

const menuItems = document.querySelectorAll('.nav__link');
menuItems.forEach((item) => {
	const scrollTo = new ScrollTo(item);
	scrollTo.init();
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
