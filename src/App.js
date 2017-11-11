import React, { Component } from 'react';
import NewsList from "./components/NewsList";
import Article from "./components/Article";
import articleData from "./data/article";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <h1>Recent News Releases</h1>
      </header>
      <section>
        {/* <NewsList style={{position:"relative"}} /> */}
        <Article content={articleData}/>
      </section>
      </div>
    );
  }
}

export default App;
