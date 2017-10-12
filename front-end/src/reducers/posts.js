import {
  FETCH_POSTS, ADD_POST, UPDATE_POST,
  FETCH_POST_COMMENTS, FETCH_CATEGORY_POSTS
} from "../actions";

const postReducer = (state=[], action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload;
    case ADD_POST:
      return state.concat(action.payload);
    case UPDATE_POST:
      if (state.length === 0) return [action.payload];
      return state.map(post => (post.id === action.payload.id ? action.payload : post));
    case FETCH_POST_COMMENTS:
      const posts = state.map(post => {
        const newPost = { ...post };
        if (newPost.id === action.payload.postId) {
          newPost.comments = action.payload.comments;
        }
        return newPost;
      });
      return posts;
    case FETCH_CATEGORY_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
