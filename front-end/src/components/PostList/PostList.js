import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../index';
import './PostList.css';

class PostList extends PureComponent {
  render() {
    const { posts, onDeletePost } = this.props;
    return (
      <div className="PostList-container">
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
