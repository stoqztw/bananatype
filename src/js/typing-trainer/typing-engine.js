export class TypingEngine {
	constructor(text, usePunctuationMarks = true) {
		this.text = ;
		this.usePunctuationMarks = usePunctuationMarks;
		this.index = 0;
	}

	getCharactersList() {
		if (!this.usePunctuationMarks) {
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
