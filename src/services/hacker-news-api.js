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

function getItem (id) {
  return new Promise((resolve, reject) => {
    axios.get(apiCalls.getItem(id))
      .then(response => {
        if (response.data) {
          resolve(response.data)
        } else {
          reject(apiCalls.getItemReject)
        }
      })
      .catch(error => {
        console.log(error)
      })
  })
}

export {
  getTopStories,
  getItem
};