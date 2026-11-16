"use strict";

import { listOfText } from "./ListOfTextForTest/listOfText";
import { TypingEngine } from "./typing-trainer/typing-engine";

window.addEventListener("DOMContentLoaded", () => {
	const text = new TypingEngine(listOfText);
});
