import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategoryPosts, fetchPostComments, fetchCategories } from '../../actions';
import { Card, SideNav } from '../../components';
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
    const { posts, categories } = this.props;
    const links = categories ? categories.map(category => {
      return { url: `/${category.path}`, name: category.name };
    }) : [];
    return (
      <div className="CategoryView-container">
        <div>
          <div className="CategoryView-post-section">
            {
              posts && posts.map(post => {
                return (post && !post.deleted &&
                  <Card
                    key={post.id}
                    timestamp={post.timestamp}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    category={post.category}
                    voteScore={post.voteScore}
                    comments={post.comments}
                    postURL={`/${post.category}/${post.id}`}
                    categoryURL={`/${post.category}`}
                  />
                );
              })
            }
          </div>
          <SideNav links={links} />
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
})(CategoryView);
