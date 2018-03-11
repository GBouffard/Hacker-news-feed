import React, { Component } from 'react';
import LoadingComponent from './components/loading-component';
import StoryContent from './components/story-content';
import {
  getTopStories,
  getStory
} from './services/hacker-news-api'
import './App.css';

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
    getTopStories(10)
      .then((topSTories) => {
        for (let i = 0; i < topSTories.length; i++) {
          getStory(topSTories[i])
            .then((storyData) => {
              this.state.storiesData.push(storyData);
            });
        }
    });
  }

  updateStories() {
    if (this.state.storiesData.length) {
      const makeStoriesElements = this.state.storiesData.map((element) => StoryContent(element));

      this.setState({
        storiesElement: makeStoriesElements
      });
    }
  }

  render() {
    setTimeout(this.updateStories, 5000);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Guillaume's Hacker News Feed</h1>
        </header>
        {this.state.storiesElement}
      </div>
    );
  }
}

export default App;
