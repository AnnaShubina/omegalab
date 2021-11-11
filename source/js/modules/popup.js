export default class Popup {
	constructor(container) {
		this.popupBtn = container;
		this.ref = this.popupBtn.getAttribute('data-ref');
		this.title = this.popupBtn.getAttribute('data-title');
		this.popup = document.getElementById(this.ref);
		this.popupClose = this.popup.querySelector('.popup-close');
		this.popupOverlay = this.popup.querySelector('.popup__overlay');
		this.popupTitle = this.popup.querySelector('.popup__title');
	}

	init() {
		this.popupBtn.addEventListener('click', () => {
			this.popupTitle.innerHTML = this.title;
			this.popup.classList.add('open');
		});
		this.popupClose.addEventListener('click', () => {
			this.popup.classList.remove('open');
		});
		this.popupOverlay.addEventListener('click', () => {
			console.log(1);
			this.popup.classList.remove('open');
		});
	}
}
