import { getCategories } from "../utils/apiHelper";

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

export function fetchCategories() {
  return dispatch => {
    return getCategories().then(categories => dispatch({
      type: FETCH_CATEGORIES,
      payload: categories,
    }));
  };
}

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category,
  };
}

export function removeCategory(categoryId) {
  return {
    type: REMOVE_CATEGORY,
    categoryId,
  }
}
