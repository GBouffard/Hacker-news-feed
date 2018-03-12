import React from 'react';
import PropTypes from 'prop-types';
import '../css/story-pop-up.css';

const StoryPopUp = ({ id, title, url }) => {
  let storyUrl = url ? url : 'no url associated to this story';

  return (
    <div
      id={`popup-${id}`}
      className="popup">
      <div
        className="popup__content">
        <div
          className="popup__story-title">
          {title}
        </div>
        <a
          className="popup__close-button"
          href="#">
          &times;
        </a>
        <div
          className="popup__story-text">
          url: {storyUrl}
        </div>
      </div>
    </div>
  );
};

StoryPopUp.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default StoryPopUp;