import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestionToUser, addAnswerToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER_QUESTION = "SAVE_ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function addAnswerToQuestion(user, question, answer) {
  return {
    type: SAVE_ANSWER_QUESTION,
    user,
    question,
    answer,
  };
}

export function handleSaveQuestion(optOneText, optTwoText, user) {
  return (dispatch) => {
    return saveQuestion({ optionOneText:optOneText, optionTwoText:optTwoText, author:user }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
}

export function handleSaveAnswerToQuestion(authedUser, question, answer) {
  return (dispatch) => {
    dispatch(addAnswerToQuestion(authedUser, question, answer));
    dispatch(addAnswerToUser(authedUser, question, answer));
    return saveQuestionAnswer(authedUser, question, answer).catch((error) => {
      console.warn("Error in handleSaveAnswerToQuestion", error);
      dispatch(addAnswerToQuestion(authedUser, question, answer));
      dispatch(addAnswerToUser(authedUser, question, answer));
    });
  };
}
