import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CommentCard } from '../index';
import './CommentList.css';

class CommentList extends Component {
  render() {
    const { comments, onDeleteComment, onUpVote, onDownVote } = this.props;
    return (
      <div className="CommentList-container">
        <h4>Comments</h4>
        <div className="CommentList-comments">
          {comments && comments.length > 0 ?
            comments.map(comment => (
              <CommentCard
                key={comment.id}
                timestamp={comment.timestamp}
                body={comment.body}
                author={comment.author}
                voteScore={comment.voteScore}
                onDeleteComment={() => onDeleteComment(comment.id)}
                onUpVote={() => onUpVote(comment.id)}
                onDownVote={() => onDownVote(comment.id)}
              >
              </CommentCard>
            )) :
            <div>
              No comments to display!
            </div>
          }
        </div>
      </div>
    );
  }
}
CommentList.propsTypes = {
  comments: PropTypes.array,
  onDeleteComment: PropTypes.func,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
};
export default CommentList;
