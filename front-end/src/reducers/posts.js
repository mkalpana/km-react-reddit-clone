import { FETCH_POSTS, FETCH_POST_COMMENTS } from "../actions";

const postReducer = (state=[], action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST_COMMENTS:
      const posts = state.map(post => {
        const newPost = { ...post };
        if (newPost.id === action.payload.postId) {
          newPost.comments = action.payload.comments;
        }
        return newPost;
      });
      return posts;
    default:
      return state;
  }
};

export default postReducer;
