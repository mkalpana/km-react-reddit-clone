import { getComments } from "../utils/apiHelper";

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function fetchComments(postId) {
  return dispatch => {
    return getComments(postId).then(comments => dispatch({
      type: FETCH_COMMENTS,
      payload: comments,
    }));
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    commentId,
  }
}
