import React from 'react';
import StoryPreviewLink from './story-preview-link';
import StoryPopUp from './story-pop-up';
import PropTypes from 'prop-types';
import '../css/App.css';

const StoryContent = (props) => {
  return (
    <div
      key={props.id}
      className="story-content">

      <StoryPreviewLink
        {...props} />

      <StoryPopUp
        id={props.id}
        title={props.title}
        url={props.url} />

    </div>
  );
};

StoryContent.propTypes = {
  by: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
}

export default StoryContent;