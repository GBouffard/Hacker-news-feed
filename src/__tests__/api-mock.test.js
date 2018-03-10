import axios from 'axios';

import {
  getTopStories
} from '../services/hacker-news-api'

const mockedTopStories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

describe('getStory', () => {
  xit('works when the api call is mocked with resolve', () => {
  })

  xit('works when the api call is mocked with reject', async () => {
  })
})
