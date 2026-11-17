import { AppError } from "../errors/app-error";
import { isString } from "../utils/is-string";

export class TypingEngine {
	constructor(text, usedPunctuationMarks = true) {
		if (!isString(text)) {
			const appError = new AppError(
				"Failed to load text for test. Check your internet connection and refresh the page.",
				"Invalid data type, it must be a string",
			);

			throw appError;
		}

		this.text = text;
		this.usedPunctuationMarks = usedPunctuationMarks;
		this.index = 0;
	}

	getCharactersList() {
		if (!this.usedPunctuationMarks) {
			this.text = this.text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");
		}

		const characterList = this.text.split("");

		return characterList;
	}

	getWordsList() {
		const wordsList = this.text
			.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
			.split(" ");

		return wordsList;
	}

	checkCharacter() {}
}
