import React from 'react';
import PropTypes from 'prop-types';

const StoryPopUp = ({ id, title }) => {
  return (
    <div
      id={`popup-${id}`}
      className="popup">
      <div
        class="popup__content">
        <div
          class="popup__story-title">
          {title}
        </div>
        <a
          class="popup__close-button"
          href="#">
          &times;
        </a>
        <div
          class="popup__story-text">
          text still to come...
        </div>
      </div>
    </div>
  );
};

StoryPopUp.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default StoryPopUp;