import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategoryPosts, fetchPostComments, fetchCategories, removePost } from '../../actions';
import { PostsList, SideNav } from '../../components';
import './CategoryView.css';

class CategoryView extends Component {
  componentDidMount() {
    this.fetchData(this.props.match.params.categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.categoryId !== nextProps.match.params.categoryId) {
      this.fetchData(nextProps.match.params.categoryId);
    }
  }

  fetchData(categoryId) {
    this.props.fetchCategories();
    this.props.fetchCategoryPosts(categoryId).then(data => {
      data && data.payload && data.payload.map(post => this.props.fetchPostComments(post.id));
    });
  }

  render() {
    const { posts, categories, match, removePost } = this.props;
    const links = categories ? categories.map(category => {
      return { url: `/${category.path}`, name: category.name };
    }) : [];
    return (
      <div className="CategoryView-container">
        <div>
          <PostsList posts={posts} onDeletePost={removePost} />
          <SideNav links={links} selected={match.params.categoryId}/>
        </div>
      </div>
    );
  }
}
CategoryView.propTypes = {
  fetchPosts: PropTypes.func,
  fetchPostComments: PropTypes.func,
  fetchCategories: PropTypes.func,
  match: PropTypes.object,
};

function mapStateToProps(state) {
  const { posts, categories } = state;
  return {
    posts,
    categories,
  };
}
export default connect(mapStateToProps, {
  fetchCategoryPosts,
  fetchPostComments,
  fetchCategories,
  removePost,
})(CategoryView);
