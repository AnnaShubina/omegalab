export default class DisableOutline {
	constructor(elem) {
		this.wrap = elem;
	}

	init() {
		this.wrap.addEventListener('click', (e) => {
			this.bodyHandler();
		});
		this.wrap.addEventListener('keydown', (e) => {
			this.windowHandler(e);
		});
	}

	bodyHandler() {
		this.wrap.classList.add('disableOutline');
	}

	windowHandler(event) {
		const TAB_KEY = 9;
		if (event.keyCode === TAB_KEY) {
			this.wrap.classList.remove('disableOutline');
		}
	}
}
