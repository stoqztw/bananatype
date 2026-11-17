import { isString } from "../utils/is-string";

export class AppError extends Error {
	constructor(userMessage, devMessage) {
		if (!isString(userMessage) || !isString(devMessage)) {
			throw new Error("One of the arguments is not string");
		}

		super(devMessage);
		this.name = "AppError";
		this.userMessage = userMessage;
		this.devMessage = devMessage;
	}

	getUserMessage() {
		return this.userMessage;
	}

	getDevMessage() {
		return this.devMessage;
	}
}
