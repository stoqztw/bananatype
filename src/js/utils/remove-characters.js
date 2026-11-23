export function removeCharacters(str, usedPunctuationMarks) {
  if (usedPunctuationMarks) {
    str = str.replace(/[^ A-Za-z,:!?'"]/g, "");
  } else {
    str = str.replace(/[^ A-Za-z]/g, "");
  }

  return str.replace(/\s+/g, " ").trim();
}
