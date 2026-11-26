export function isActive(selector) {
	const element = document.querySelector(selector);

	return document.activeElement === element;
}
