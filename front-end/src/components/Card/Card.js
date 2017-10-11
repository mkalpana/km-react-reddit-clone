import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';
import moment from 'moment';
import { VoteScore } from '../index';

class Card extends PureComponent {
  render() {
    const {
      timestamp, title, body, author, category, voteScore, comments,
      postURL, categoryURL, onUpVote, onDownVote, onDeletePost,
    } = this.props;
    const postDateTime = new Date(timestamp);
    return (
      <div className="Card-container">
        <VoteScore score={voteScore} onUpVote={onUpVote} onDownVote={onDownVote} />
        <div>
          <Link to={postURL}><h3 className="Card-title">{title}</h3></Link>
          <div className="Card-description">{body}</div>
          <div className="Card-detail">
            Posted by <span className="bolditalic">{author}</span> {timestamp ? ` on ${moment(postDateTime).format('MMMM Do YYYY, h:mm:ss a')}` : ''}
          </div>
          <div className="Card-detail">
            Posted under&nbsp;
            <Link className="bold" to={categoryURL}>{category}</Link> |&nbsp;
            <Link className="bold" to={postURL}>{comments ? comments.length : 0}</Link>&nbsp;comments |&nbsp;
            <a href="#" onClick={onDeletePost} className="bold">Delete Post</a>
          </div>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  timestamp: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  voteScore: PropTypes.number,
  comments: PropTypes.array,
  postURL: PropTypes.string,
  categoryURL: PropTypes.string,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  onDeletePost: PropTypes.func,
};

export default Card;
