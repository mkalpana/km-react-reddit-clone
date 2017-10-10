// Actions
export { FETCH_CATEGORIES } from './categories';
export {
  FETCH_POSTS, ADD_POST, REMOVE_POST,
  FETCH_POST_COMMENTS, ADD_POST_COMMENT, REMOVE_POST_COMMENT,
  FETCH_CATEGORY_POSTS,
} from './posts';

// Action Creators
export { fetchCategories, addCategory, removeCategory } from './categories';
export {
  fetchPosts, addPost, removePost,
  fetchPostComments, addPostComment, removePostComment,
  fetchCategoryPosts,
} from './posts';
