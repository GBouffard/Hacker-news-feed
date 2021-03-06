import React, { Component } from 'react';
import LoadingComponent from './components/loading-component';
import StoryContent from './components/story-content';
import {
  getTopStories,
  getItem
} from './services/hacker-news-api'
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.updateStories = this.updateStories.bind(this);
    this.state = {
      storiesData: [],
      storiesElement: LoadingComponent()
    }
  }

  componentWillMount() {
    getTopStories(500)
      .then((topSTories) => {
        for (let i = 0; i < topSTories.length; i++) {
          getItem(topSTories[i])
            .then((itemData) => {
              this.state.storiesData.push(itemData);
            });
        }
    });
  }

  updateStories() {
    if (this.state.storiesData.length) {
      const makeStories = this.state.storiesData.map((element) => StoryContent(element));

      const makeStoriesElements = (
        <section
          className="stories-container">
          {makeStories}
        </section>
      );

      this.setState({
        storiesElement: makeStoriesElements
      });
    }
  }

  render() {
    setTimeout(this.updateStories, 5000);

    return (
      <div
        id="guillaume-hacker-news-app"
        className="App">

        <header
          className="App-header">
          <img
            alt="Guillaume hacker news logo"
            className="App-logo"
            src="/images/Guillaume_hacker_news.png" />
        </header>

        {this.state.storiesElement}

      </div>
    );
  }
}

export default App;
