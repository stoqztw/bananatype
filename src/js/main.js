"use strict";

import { listOfText } from "./ListOfTextForTest/listOfText";
import { MainText } from "./pasteText";

window.addEventListener("DOMContentLoaded", () => {
	const text = new MainText(listOfText, "[data-text]");
	console.log(text.generate());
});
