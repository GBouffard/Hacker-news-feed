import axios from 'axios';
import mocked from '../constants/mock-api-data';
import apiCalls from '../constants/constants';
import {
  getTopStories,
  getStory
} from '../services/hacker-news-api';

describe('getTopStories - ', () => {
  it('works when the api call is mocked with resolve', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: mocked.topStories }))

    getTopStories(25)
      .then(resolvedData => {
        expect(resolvedData).toBeDefined();
        expect(resolvedData.length).toEqual(10);
      })
  })
})

describe('getStory - ', () => {
  it('works when the api call is mocked with resolve', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: mocked.story }))

    getStory()
      .then(resolvedData => {
        expect(resolvedData).toBeDefined();
        expect(resolvedData.title).toEqual(mocked.story.title);
      })
  })

  it('works when the api call is mocked with reject', async () => {
    axios.get = jest.fn().mockImplementation(() => Promise.reject(apiCalls.getStoryReject))

    expect(getStory()).rejects
      .toEqual('There is no Hacker news story corresponding to this ID.');
  })
})
