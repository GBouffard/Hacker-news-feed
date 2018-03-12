import axios from 'axios';
import mocked from '../constants/mock-api-data';
import apiCalls from '../constants/constants';
import {
  getTopStories,
  getItem
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

describe('getItem - ', () => {
  it('works when the api call is mocked with resolve', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: mocked.story }))

    getItem()
      .then(resolvedData => {
        expect(resolvedData).toBeDefined();
        expect(resolvedData.title).toEqual(mocked.story.title);
      })
  })

  it('works when the api call is mocked with reject', async () => {
    axios.get = jest.fn().mockImplementation(() => Promise.reject(apiCalls.getItemReject))

    expect(getItem()).rejects
      .toEqual('There is no Hacker news item corresponding to this ID.');
  })
})
