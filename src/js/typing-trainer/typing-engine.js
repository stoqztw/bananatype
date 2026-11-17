import { errors } from "../errors/errors";
import { isString } from "../utils/is-string";

export class TypingEngine {
  constructor(text, usePunctuationMarks = true) {
    if (!isString(text)) {
      const error = new Error(errors.ERROR_INVALID_TYPE.forDev);
      error.userMessage = errors.ERROR_INVALID_TYPE.forUser;

      throw error;
    }

    this.text = text;
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

  checkCharacter() {
  }
}
