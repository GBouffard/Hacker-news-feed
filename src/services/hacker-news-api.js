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

export {
  getTopStories
}