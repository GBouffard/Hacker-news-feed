import React from 'react';
import PropTypes from 'prop-types';
import '../css/story-pop-up.css';

const StoryPreviewLink = ({ by, id, score, title }) => {
  return (
    <a
      href={`#popup-${id}`}
      className="story-content__link"
      key={id}>
      <div
        className="story-content__score">
        {score}
      </div>

      <div
        className="story-content__title-and-author-container">
        <div
          className="story-content__title">
          {title}
        </div>
        <div
          className="story-content__author">
          by: {by}
        </div>
      </div>
    </a>
  );
};

StoryPreviewLink.propTypes = {
  by: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default StoryPreviewLink;