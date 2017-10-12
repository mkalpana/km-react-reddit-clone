import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CommentCard.css';
import { formatDate } from '../../utils/helpers';
import { VoteScore } from '../index';

class CommentCard extends PureComponent {
  render() {
    const {
      timestamp, body, author, voteScore, onUpVote, onDownVote, onDeleteComment,
    } = this.props;
    const commentDateTime = new Date(timestamp);
    return (
      <div className="CommentCard-container">
        <VoteScore score={voteScore} onUpVote={onUpVote} onDownVote={onDownVote} />
        <div>
          <div className="CommentCard-description">{body}</div>
          <div className="CommentCard-detail">
            Posted by <span className="bolditalic">{author}</span> {timestamp ? ` on ${formatDate(commentDateTime)}` : ''} | &nbsp;
          </div>
          <div className="CommentCard-detail">
            <button onClick={onDeleteComment} className="CommentCard-button">Delete Comment</button>
          </div>
        </div>
      </div>
    );
  }
}
CommentCard.propTypes = {
  timestamp: PropTypes.number,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  voteScore: PropTypes.number,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  onDeleteComment: PropTypes.func,
};
export default CommentCard;
