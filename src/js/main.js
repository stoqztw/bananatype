"use strict";

import { AppError } from "./errors/app-error";
import { Notification } from "./notification/notification";
import { listOfText } from "./typing-trainer/list-of-texts";
import { TypingEngine } from "./typing-trainer/typing-engine";

window.addEventListener("DOMContentLoaded", () => {
  try {
    // FOR TEST WITHOUT ERRORS
    // const text = new TypingEngine(listOfText[0], false);
    const text = new TypingEngine(
      `Order #408-A/B: status — 'In Progress' (updated 11/23/2026 at 14:18).
Client: user_name@example.com | Phone: +1 (555) 123-45-67; ext. code:: *100#.`,
      true,
    );
    console.log(text);

    // FOR TEST WITH ERRORS
    // const text = new TypingEngine(1, false);

    console.log(text.getCharactersList());
    console.log(text.getWordsList());
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
