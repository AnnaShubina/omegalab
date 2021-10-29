export default class Parallax {
	constructor(direct = 'x',
							speed = 0,
							startInterval = 0,
							endInterval = 0,
							container = null,
							wrapper = null,
							startX = 0,
							startY = 0) {
		this.container = container;
		this.wrapper = wrapper;
		this.x = 0;
		this.y = 0;
		this.startX = startX;
		this.startY = startY;
		this.direct = direct;
		this.speed = speed;
		this.scrollPosition = 0;
		this.startInterval = startInterval;
		this.endInterval = endInterval;
		this.reverse = this.container.getAttribute('data-reverse') || 1;
		this.scrollHandler = this.scroll.bind(this);
	}

	init() {
		this.container.setAttribute("style", `transform: translate(${this.startX ? this.startX : this.x}%, ${this.startY ? this.startY : this.y}%)`);
		window.addEventListener("scroll", this.scrollHandler);
	}

	destroy() {
		window.removeEventListener("scroll", this.scrollHandler);
	}

	move(d) {
		if (this.direct === 'y') {
			if (d === 1 && this.y < this.startInterval) {
				this.y += this.speed * d;
			}

			if (d === -1 && this.y > -this.endInterval) {
				this.y += this.speed * d;
			}
		}

		if (this.direct === 'x') {
			if (this.reverse === '-1') {
				if (d === 1 && this.x < this.endInterval) {
					this.x += this.speed * d;
				}

				if (d === -1 && this.x > -this.startInterval) {
					this.x += this.speed * d;
				}
			} else {
				if (d === 1 && this.x < this.startInterval) {
					this.x += this.speed * d;
				}

				if (d === -1 && this.x > -this.endInterval) {
					this.x += this.speed * d;
				}
			}
		}

		this.container.setAttribute("style", `transform: translate(${this.x + this.startX}%, ${this.y + this.startY}%)`);
	}

	checkPosition() {
		const topOffset = window.pageYOffset + this.wrapper.getBoundingClientRect().top;
		const bottomOffset = window.pageYOffset + this.wrapper.getBoundingClientRect().bottom;
		const windowBottom = window.pageYOffset + document.documentElement.clientHeight;
		const windowTop = window.pageYOffset;
		return topOffset < windowBottom && bottomOffset > windowTop;
	}


	scroll(e) {
		if (this.checkPosition()) {
			let d = 0;
			if (window.pageYOffset > this.scrollPosition) {
				d = 1 * this.reverse;
			} else {
				d = -1 * this.reverse;
			}
			this.scrollPosition = window.pageYOffset;
			this.move(d);
		}
	}
}
