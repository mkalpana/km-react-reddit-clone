import {
  getPosts, deletePost, getPostComments, getCategoryPosts
} from "../utils/apiHelper";

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';
export const REMOVE_POST_COMMENT = 'REMOVE_POST_COMMENT';

export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';

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
    payload: post,
  };
}

export function removePost(postId) {
  return dispatch => {
    return deletePost(postId).then(post => dispatch({
      type: REMOVE_POST,
      payload: post,
    }));
  };
}

export function upVotePost() {
  return {
    type: UP_VOTE_POST,
  };
}

export function downVotePost() {
  return {
    type: DOWN_VOTE_POST,
  };
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

export function fetchCategoryPosts(categoryId) {
  return dispatch => {
    return getCategoryPosts(categoryId).then(posts => dispatch({
      type: FETCH_CATEGORY_POSTS,
      payload: posts,
    }));
  };
}
