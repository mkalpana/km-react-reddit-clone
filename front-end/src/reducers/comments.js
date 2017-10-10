import { FETCH_COMMENTS } from "../actions/comments";

const commentsReducer = (state=[], action) => {
  switch(action.payload) {
    case FETCH_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default commentsReducer;
