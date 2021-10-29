export default class ScrollTo {
	constructor(container) {
		this.container = container;
		this.ref = this.container.getAttribute('data-ref');
		this.target = document.getElementById(this.ref);
	}

	init() {
		this.container.addEventListener('click', () => {
			this.goTo();
		});
	}

	goTo() {
		let pos = this.target.offsetTop;
		window.scrollTo({
			top: pos - 20,
			left: 0,
			behavior: 'smooth'
		});
	}
}
