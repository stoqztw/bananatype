"use strict";

import { Notification } from "./notification/notification";
import { TypingEngine } from "./typing-trainer/typing-engine";

window.addEventListener("DOMContentLoaded", () => {
	try {
		// const text = new TypingEngine(listOfText[2], false);
		const text = new TypingEngine(1, false);

		console.log(text.getCharactersList());
		console.log(text.getWordsList());
	} catch (error) {
		console.error(error.message);

		const notification = new Notification(error.userMessage);
		notification.show();
	}
});
