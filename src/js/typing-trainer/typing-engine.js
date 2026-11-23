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

    this.text = usedPunctuationMarks
      ? text.replace(/[^A-Za-z,.:;!?'"-]/g, "").trim()
      : text.replace(/[^A-Za-z]/g, "").trim();
    this.usedPunctuationMarks = usedPunctuationMarks;
    this.index = 0;
  }

  getCharactersList() {
    const characterList = this.text.split("");

    return characterList;
  }

  getWordsList() {
    const wordsList = this.text
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
      .split(" ");

    return wordsList;
  }

  checkCharacter(character) {
    if (!isString(character)) {
      return;
    }

    return;
  }
}
