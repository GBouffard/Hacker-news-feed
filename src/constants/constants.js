import _ from 'lodash';

const getItemTemplate = `https://hacker-news.firebaseio.com/v0/item/<%= id %>.json?print=pretty`;
const compiled = _.template(getItemTemplate);

const apiCalls = {
  topStories: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  getItem: (itemId) => compiled({ id: itemId }),
  getItemReject: 'There is no Hacker news item corresponding to this ID.'
};

export default apiCalls;