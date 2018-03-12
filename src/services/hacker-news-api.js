import axios from 'axios';
import apiCalls from '../constants/constants';

function getTopStories(limit) {
  return new Promise((resolve, reject) => {
    axios.get(apiCalls.topStories)
      .then(response => {
        resolve(response.data.slice(0, limit))
      })
      .catch(error => {
        console.log(error)
      })
  })
}
// 339 stories btw!

function getStory (id) {
  return new Promise((resolve, reject) => {
    axios.get(apiCalls.getStory(id))
      .then(response => {
        console.log(response.data);
        if (response.data) {
          resolve(response.data)
        } else {
          reject(apiCalls.getStoryReject)
        }
      })
      .catch(error => {
        console.log(error)
      })
  })
}

export {
  getTopStories,
  getStory
};