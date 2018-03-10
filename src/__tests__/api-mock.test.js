import axios from 'axios';

import {
  getTopStories,
  getStory
} from '../services/hacker-news-api';

const mockedTopStories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mockedStory = {
  by: 'Guillaume',
  descendants: 1,
  id: 11111111,
  kids: [22222222, 33333333],
  score: 99,
  time: 1520691427,
  title: 'Guillaume is building a Hacker-news feed!',
  type: 'story',
  url: 'https://github.com/GBouffard'
};

describe('getTopStories - ', () => {
  it('works when the api call is mocked with resolve', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: mockedTopStories }))

    getTopStories(25)
      .then(resolvedData => {
        expect(resolvedData).toBeDefined();
        expect(resolvedData.length).toEqual(10);
      })
  })
})

describe('getStory - ', () => {
  it('works when the api call is mocked with resolve', () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: mockedStory }))

    getStory()
      .then(resolvedData => {
        expect(resolvedData).toBeDefined();
        expect(resolvedData.title).toEqual('Guillaume is building a Hacker-news feed!');
      })
  })

  it('works when the api call is mocked with reject', async () => {
    axios.get = jest.fn().mockImplementation(() => Promise.reject('There is no Hacker news story corresponding to this ID.'))

    expect(getStory()).rejects
      .toEqual('There is no Hacker news story corresponding to this ID.');
  })
})
