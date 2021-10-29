export default class TextareaResize {
	constructor(container) {
		this.input = container;
	}

	init() {
		this.input.setAttribute('style', 'height:' + (this.input.scrollHeight) + 'px;overflow-y:hidden;');
		this.input.addEventListener('input', () => {
			if (this.input.value !== '') {
				this.input.style.height = (this.input.scrollHeight) + 'px';
			} else {
				this.input.style.height = '';
			}
		});
	}
}
