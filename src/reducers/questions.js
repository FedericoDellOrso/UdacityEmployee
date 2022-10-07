import {
  RECEIVE_QUESTIONS,
  SAVE_ANSWER_QUESTION,
  SAVE_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case SAVE_ANSWER_QUESTION:
      return {
        ...state,
        [action.question]: {
          ...state[action.question],
          [action.answer]: {
            ...state[action.question][action.answer],
            votes: state[action.question][action.answer].votes.concat(
              action.user
            ),
          },
        },
      };

    default:
      return state;
  }
}
