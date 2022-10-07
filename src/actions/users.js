export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_ANSWER_TO_USER = "SAVE_ANSWER_TO_USER"
export const SAVE_QUESTION_TO_USER = "SAVE_QUESTION_TO_USER"

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addAnswerToUser(user, question, answer) {
  return {
    type: SAVE_ANSWER_TO_USER,
    user,
    question,
    answer,
  };
}

export function addQuestionToUser({id, author}) {
  return {
    type: SAVE_QUESTION_TO_USER,
    author,
    id,
  };
}