import {
  RECEIVE_USERS,
  SAVE_ANSWER_TO_USER,
  SAVE_QUESTION_TO_USER,
} from "../actions/users";

export default function users(state={}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...StaticRange,
        ...action.users,
      };
    case SAVE_QUESTION_TO_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.id),
        },
      };
    case SAVE_ANSWER_TO_USER:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.question]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
