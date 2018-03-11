import _ from 'lodash';

const getStoryTemplate = `https://hacker-news.firebaseio.com/v0/item/<%= id %>.json?print=pretty`;
const compiled = _.template(getStoryTemplate);

const apiCalls = {
  topStories: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  getStory: (storyId) => compiled({ id: storyId })
};

export default apiCalls;