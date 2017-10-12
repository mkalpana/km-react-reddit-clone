import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PostView } from '../../components';
import {
  fetchPost, fetchPostComments, fetchCategories, editPost,
  removePost, upVotePost, downVotePost
} from "../../actions/";

class ViewPost extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchPost(match.params.postId);
    this.props.fetchPostComments(match.params.postId);
    this.props.fetchCategories();
  }

  onDeletePost(postId) {
    this.props.removePost(postId);
    this.props.history.goBack();
  }

  render() {
    const { posts, match, upVotePost, downVotePost } = this.props;
    const post = posts && posts.find(post => {
      return post.id === match.params.postId;
    });
    if (!post) return null;
    if (post.deleted) {
      return (
        <div>Oops! This post has been deleted!</div>
      );
    }
    return (
      <div>
        <PostView
          timestamp={post.timestamp}
          title={post.title}
          body={post.body}
          author={post.author}
          category={post.category}
          voteScore={post.voteScore}
          onUpVote={() => upVotePost(post.id)}
          onDownVote={() => downVotePost(post.id)}
          postEditURL={`/${post.category}/${post.id}/edit`}
          categoryURL={`/${post.category}`}
          onDeletePost={() => this.onDeletePost(post.id)}
        />
      </div>
    );
  }
}
ViewPost.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object,
  history: PropTypes.object,
  fetchPost: PropTypes.func,
  fetchPostComments: PropTypes.func,
  fetchCategories: PropTypes.func,
  removePost: PropTypes.func,
  upVotePost: PropTypes.func,
  downVotePost: PropTypes.func,
};
function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts,
  };
}
export default connect(mapStateToProps, {
  fetchPost,
  fetchPostComments,
  fetchCategories,
  editPost,
  removePost,
  upVotePost,
  downVotePost,
})(ViewPost);
