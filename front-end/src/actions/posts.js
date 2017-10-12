import {
  getPosts, getPost, updatePost, deletePost, getPostComments, getCategoryPosts, votePost,
} from "../utils/apiHelper";

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';

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

export function fetchPost(postId) {
  return dispatch => {
    return getPost(postId).then(post => dispatch({
      type: UPDATE_POST,
      payload: post,
    }));
  };
}

export function editPost(post) {
  return dispatch => {
    return updatePost(post).then(post => dispatch({
      type: UPDATE_POST,
      payload: post,
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
      type: UPDATE_POST,
      payload: post,
    }));
  };
}

export function upVotePost(postId) {
  return dispatch => {
    return votePost(postId, 'upVote').then(post => dispatch({
      type: UPDATE_POST,
      payload: post,
    }));
  };
}

export function downVotePost(postId) {
  return dispatch => {
    return votePost(postId, 'downVote').then(post => dispatch({
      type: UPDATE_POST,
      payload: post,
    }));
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
