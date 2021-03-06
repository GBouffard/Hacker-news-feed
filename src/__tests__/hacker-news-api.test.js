import axios from 'axios';
import apiCalls from '../constants/constants';
import {
  getTopStories,
  getItem
} from '../services/hacker-news-api';

describe('getTopStories - ', () => {
  it('should make the correct api call', () => {
    jest.spyOn(axios, 'get')
    getTopStories(25);
    expect(axios.get).toHaveBeenCalledWith(apiCalls.topStories);
  })

  it('should load top stories limited by the given number', () => {
    getTopStories(25)
      .then(resolvedData => {
        expect(resolvedData).toBeDefined();
        expect(resolvedData.length).toEqual(25);
      })
  })
})

describe('getItem - ', () => {
  it('should make the correct api call', () => {
    jest.spyOn(axios, 'get')
    getItem(9999);
    expect(axios.get).toHaveBeenCalledWith(apiCalls.getItem(9999));
  })

  it('should resolve the story data', () => {
    getItem(16558540)
      .then(resolvedData => {
        expect(resolvedData).toBeDefined();
        expect(resolvedData.title).toEqual("Debian 9.4 released");
      })
  })

  it('should reject if the id does not correspond to a hacker news story', async () => {
    await expect(getItem(0)).rejects
      .toEqual(apiCalls.getItemReject);
  })
})
