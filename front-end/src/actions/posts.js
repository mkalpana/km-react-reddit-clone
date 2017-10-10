import { getPosts } from "../utils/apiHelper";

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

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
