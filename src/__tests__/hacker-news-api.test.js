import axios from 'axios';

import {
  getTopStories,
  getStory
} from '../services/hacker-news-api';

describe('getTopStories - ', () => {
  it('should make the correct api call', () => {
    jest.spyOn(axios, 'get')
    getTopStories(25);
    expect(axios.get).toHaveBeenCalledWith('https://hacker-news.firebaseio.com/v0/topstories.json');
  })

  xit('should load top stories limited by the given number', () => {
  })
})

describe('getStory - ', () => {
  xit('should make the correct api call', () => {
  })

  xit('should resolve the story data', () => {
  })

  xit('should reject if the id does not correspond to a hacker news story', async () => {
  })
})
