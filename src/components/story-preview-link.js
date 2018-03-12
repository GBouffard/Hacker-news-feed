import React from 'react';
import PropTypes from 'prop-types';
import '../css/story-preview-link.css';

const StoryPreviewLink = ({ by, id, score, title }) => {
  return (
    <a
      href={`#popup-${id}`}
      className="story-preview__link"
      key={id}>
      <div
        className="story-preview__score">
        {score}
      </div>

      <div
        className="story-preview__title-and-author-container">
        <div
          className="story-preview__title">
          {title}
        </div>
        <div
          className="story-preview__author">
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