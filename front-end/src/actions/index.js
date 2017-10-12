// Actions
export { FETCH_CATEGORIES } from './categories';
export {
  FETCH_POSTS, ADD_POST, UPDATE_POST,
  FETCH_POST_COMMENTS, ADD_POST_COMMENT, REMOVE_POST_COMMENT,
  FETCH_CATEGORY_POSTS,
} from './posts';

// Action Creators
export { fetchCategories, addCategory, removeCategory } from './categories';
export {
  fetchPosts, fetchPost, editPost, addPost, removePost, upVotePost, downVotePost,
  fetchPostComments, addPostComment, removePostComment,
  fetchCategoryPosts,
} from './posts';
