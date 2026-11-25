"use strict";

import { AppError } from "./errors/app-error";
import { Notification } from "./notification/notification";
import { listOfText } from "./typing-trainer/list-of-texts";
import { TypingEngine } from "./typing-trainer/typing-engine";
import { TypingRender } from "./typing-trainer/typing-render";

window.addEventListener("DOMContentLoaded", () => {
	try {
		// FOR TEST WITHOUT ERRORS
		// const text = new TypingEngine(listOfText[0], false);
		const text = new TypingEngine(
			`adhfj hdjfh ajshdf hasjkdh fjahsd jfhjasdh fhas jdhfjh asjkdhf jhasjdh jahsd fasdh asl hlah h lhalh flah sdhh`,
			true,
		);
		const typingRender = new TypingRender(
			text.getCharactersList(),
			"[data-text]",
		);

		typingRender.render();

		window.addEventListener("keydown", (e) => {
			// for take key use e.key
			const key = e.key;

			console.log(key);

			if (text.checkCharacter(key)) {
				console.log(1);
			}
		});
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
