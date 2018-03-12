import React from 'react';
import StoryPopUp from '../components/story-pop-up';
import renderer from 'react-test-renderer';

describe('StoryPopUp ', () => {
  const component = renderer.create(
    <StoryPopUp
      id={123456789}
      title='this is a snapshot test'
      url='https://github.com/GBouffard/Hacker-news-feed' />
  );

  const tree = component.toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});