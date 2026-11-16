"use strict";

import { listOfText } from "./typing-trainer/list-of-texts";
import { TypingEngine } from "./typing-trainer/typing-engine";

window.addEventListener("DOMContentLoaded", () => {
	const text = new TypingEngine(listOfText[2], false);
	console.log(text.getCharactersList());
	console.log(text.getWordsList());
});
