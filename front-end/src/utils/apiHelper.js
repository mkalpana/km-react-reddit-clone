import axios from 'axios';
import config from '../config.json';

// Axios settings
axios.defaults.baseURL = config.API_SERVER;
axios.defaults.headers.common['Authorization'] = config.AuthorizationToken;
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const getPosts = () => {
  return axios.get('/posts').then(response => response && response.data ? response.data : []);
};


export const getCategories = () => {
  return axios.get('/categories').then(response => response && response.data ? response.data.categories : []);
};


export const getPostComments = (postId) => {
  return axios.get(`/posts/${postId}/comments`).then(response => response && response.data ? response.data : []);
};

export const getCategoryPosts = (categoryId) => {
  return axios.get(`/${categoryId}/posts`).then(response => response && response.data ? response.data : []);
};
