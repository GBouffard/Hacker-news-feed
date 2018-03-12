import React from 'react';
import StoryPreviewLink from '../components/story-preview-link';
import renderer from 'react-test-renderer';

describe('StoryPreviewLink ', () => {
  const component = renderer.create(
    <StoryPreviewLink
      by='Guillaume'
      id={123456789}
      score={99}
      title='this is a snapshot test' />
  );
  let tree = component.toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});