import { getPosts, getPostComments } from "../utils/apiHelper";

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';
export const REMOVE_POST_COMMENT = 'REMOVE_POST_COMMENT';

export function fetchPosts() {
  return dispatch => {
    return getPosts().then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts,
    }));
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId,
  }
}


export function fetchPostComments(postId) {
  return dispatch => {
    return getPostComments(postId).then(comments => dispatch({
      type: FETCH_POST_COMMENTS,
      payload: {
        postId,
        comments,
      },
    }));
  };
}

export function addPostComment(comment) {
  return {
    type: ADD_POST_COMMENT,
    comment,
  };
}

export function removePostComment(commentId) {
  return {
    type: REMOVE_POST_COMMENT,
    commentId,
  }
}
