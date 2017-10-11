import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchPosts, removePost, fetchPostComments, fetchCategories
} from '../../actions';
import { Card, SideNav } from '../../components';
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
          <div className="Home-post-section">
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
                    onDeletePost={() => removePost(post.id)}
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
