import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../index';
import  { TIME_ASC, TIME_DESC, SCORE_ASC, SCORE_DESC, sortHelper } from "./util";
import './PostList.css';

class PostList extends Component {
  state = {
    sortOrder: '',
  };

  onSortChange = (e) => {
    this.setState({ sortOrder: e.target.value });
  };

  getSortedPosts() {
    const { posts } = this.props;
    const { sortOrder } = this.state;

    switch(sortOrder) {
      case TIME_ASC:
        return posts.sort((a, b) => sortHelper(a.timestamp, b.timestamp, true));
      case TIME_DESC:
        return posts.sort((a, b) => sortHelper(a.timestamp, b.timestamp, false));
      case SCORE_ASC:
        return posts.sort((a, b) => sortHelper(a.voteScore, b.voteScore, true));
      case SCORE_DESC:
        return posts.sort((a, b) => sortHelper(a.voteScore, b.voteScore, false));
      default:
        return posts;
    }
  }

  render() {
    const { posts, onDeletePost } = this.props;
    const sortedPosts = this.getSortedPosts(posts);

    return (
      <div className="PostList-container">
        <div className="PostList-sort-container">
          <div>
            <span id="sort-by-id"> Sort By: </span>
            <select onChange={this.onSortChange} aria-labelledby="sort-by-id">
              <option value={TIME_ASC}>Date: Earliest First</option>
              <option value={TIME_DESC}>Date: Recent First</option>
              <option value={SCORE_ASC}>Vote Score: Best First</option>
              <option value={SCORE_DESC}>Vote Score: Worst First</option>
            </select>
          </div>
        </div>
        {
          sortedPosts && sortedPosts.map(post => {
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
                onDeletePost={() => onDeletePost(post.id)}
              />
            );
          })
        }
      </div>
    );
  }
}
PostList.propTypes = {
  posts: PropTypes.array,
  onDeletePost: PropTypes.func,
};
export default PostList;
