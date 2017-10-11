import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchPosts, removePost, fetchPostComments, fetchCategories
} from '../../actions';
import { PostsList, SideNav } from '../../components';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts().then(data => {
      data && data.payload && data.payload.map(post => this.props.fetchPostComments(post.id));
    });
    this.props.fetchCategories();
  }

  render() {
    const { posts, categories, removePost } = this.props;
    const links = categories ? categories.map(category => {
      return { url: `/${category.path}`, name: category.name };
    }) : [];
    return (
      <div className="Home-container">
        <div>
          <PostsList posts={posts} onDeletePost={removePost} />
          <SideNav links={links} />
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  fetchPosts: PropTypes.func,
  removePost: PropTypes.func,
  fetchPostComments: PropTypes.func,
  fetchCategories: PropTypes.func,
};

function mapStateToProps(state) {
  const { posts, categories } = state;
  return {
    posts,
    categories,
  };
}
export default connect(mapStateToProps, {
  fetchPosts,
  removePost,
  fetchPostComments,
  fetchCategories,
})(Home);
