export class Notification {
	constructor(errorMessage, notificationClassName = "notification") {
		this.errorMessage = errorMessage;
		this.notificationClassName = notificationClassName;
		this.notificationElement = document.createElement("div");
		this.notificationCloseButton = document.createElement("button");
	}

	show() {
		this.notificationElement.classList.add(this.notificationClassName);
		this.notificationCloseButton.classList.add(
			`${this.notificationClassName}__close`,
		);

		this.notificationElement.innerHTML = `
			<p>${this.errorMessage}</p>
			<button class="notification__close">&#10006;</button>
		`;

		document.body.prepend(this.notificationElement);
	}

	clear() {}
}
