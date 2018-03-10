import axios from 'axios';

function getTopStories(limit) {
  return new Promise((resolve, reject) => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
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
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(response => {
        if (response.data) {
          resolve(response.data)
        } else {
          reject('There is no Hacker news story corresponding to this ID.')
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