import React from 'react';
import PropTypes from 'prop-types';
import '../css/story-pop-up.css';

const StoryPopUp = ({ id, title }) => {
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
          text still to come...
        </div>
      </div>
    </div>
  );
};

StoryPopUp.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default StoryPopUp;