"use strict";

import { AppError } from "./errors/app-error";
import { Notification } from "./notification/notification";
import { listOfText } from "./typing-trainer/list-of-texts";
import { TypingEngine } from "./typing-trainer/typing-engine";
import { TypingRender } from "./typing-trainer/typing-render";
import { isActive } from "./utils/is-active";
import { showPause } from "./utils/show";

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
		const pauseScreen = document.querySelector(".main-screen__pause");

		typingRender.render();

		window.addEventListener("keydown", (e) => {
			// for take key use e.key
			const key = e.key;

			console.log(key);

			if (text.checkCharacter(key)) {
				console.log(1);
			}
		});

		// setInterval(() => {
		// 	if (!isActive("textarea")) {
		// 		pauseScreen.classList.add("show-flex");
		// 	} else {
		// 		pauseScreen.classList.remove("show-flex");
		// 	}
		// }, 1000);
		//
		window.addEventListener("click", (e) => {
			if (!isActive("textarea")) {
				show(pauseScreen, "show-flex");
			} else {
				(pauseScreen, "show-flex");
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
