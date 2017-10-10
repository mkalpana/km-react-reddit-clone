import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, fetchComments, fetchCategories } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
    this.props.fetchComments();
  }

  render() {
    return (
      <div>Home</div>
    );
  }
}
Home.propTypes = {

}

function mapStateToProps(state) {
  const { posts, comments, categories } = state;
  return {
    posts,
    comments
  }
}
export default connect(mapStateToProps, {
  fetchPosts,
  fetchComments,
  fetchCategories,
})(Home);
