import React from 'react';
import PropTypes from 'prop-types';

const StoryContent = ({ by, id, score, title }) => {
  return (
    <div
      key={id}>
      {title}  /  {by}  /  {score}
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