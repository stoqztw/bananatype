import { AppError } from "../errors/app-error";
import { isString } from "../utils/is-string";
import { removeCharacters } from "../utils/remove-characters";

export class TypingEngine {
  constructor(text, usedPunctuationMarks = true) {
    if (!isString(text)) {
      const appError = new AppError(
        "Failed to load text for test. Check your internet connection and refresh the page.",
        "Invalid data type, it must be a string",
      );

      throw appError;
    }

    this.usedPunctuationMarks = usedPunctuationMarks;
    this.text = removeCharacters(text, this.usedPunctuationMarks);
    this.characterList = this.text.split("");
    this.index = 0;
  }

  getCharactersList() {
    return this.characterList;
  }

  getWordsList() {
    const wordsList = removeCharacters(this.text, false).split(" ");

    return wordsList;
  }

  checkCharacter(character) {
    if (!isString(character)) {
      return;
    }

    if (index >= this.text.length) {
      this.index = 0;
    }

    if (character === this.characterList[this.index]) {
      this.index++;

      return true;
    }

    return false;
  }

  getIndex() {
    return this.index;
  }
}
