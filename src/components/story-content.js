import React from 'react';
import PropTypes from 'prop-types';
import '../css/story-content.css';

const StoryContent = ({ by, id, score, title }) => {
  return (
    <div
      className="story-content"
      key={id}>
      <div>
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
    </div>
  );
};

StoryContent.propTypes = {
  by: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default StoryContent;