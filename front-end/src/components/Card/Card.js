import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component{
  render() {
    const { timestamp, title, body, author, category, comments, postURL } = this.props;
    return (
      <div>
        <Link to={postURL}><h2 className="Card-title">{title}</h2></Link>
        <div>{body}</div>
        <div>Post by {author} in {category} section{timestamp ? ` at ${new Date(timestamp)}` : ''}</div>
        <div>Received {comments ? comments.length : 0} comments</div>
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
};

export default Card;
