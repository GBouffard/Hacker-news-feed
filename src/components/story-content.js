import React from 'react';
import StoryPreviewLink from './story-preview-link';
import StoryPopUp from './story-pop-up';
import PropTypes from 'prop-types';
import '../css/story-content.css';

const StoryContent = (props) => {
  return (
    <div
      className="story-content">

      <StoryPreviewLink
        {...props} />

      <StoryPopUp
        id={props.id}
        title={props.title} />

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