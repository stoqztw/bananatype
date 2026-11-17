"use strict";

import { AppError } from "./errors/app-error";
import { Notification } from "./notification/notification";
import { TypingEngine } from "./typing-trainer/typing-engine";

window.addEventListener("DOMContentLoaded", () => {
	try {
		// FOR TEST WITHOUT ERRORS
		const text = new TypingEngine(listOfText[2], false);

		// FOR TEST WITH ERRORS
		// const text = new TypingEngine(1, false);

		console.log(text.getCharactersList());
		console.log(text.getWordsList());
	} catch (appError) {
		const notification = new Notification();

		if (appError instanceof AppError) {
			console.error(appError.getDevMessage());
			notification.show(appError.getUserMessage());
		} else {
			console.error(appError);
			notification.show("Server side error!");
		}
	}
});
