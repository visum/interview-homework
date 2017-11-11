import React, { Component } from 'react';
import NewsList from "./components/NewsList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <h1>Recent News Releases</h1>
      </header>
      <content>
        <NewsList />
      </content>
      <footer>

      </footer>
      </div>
    );
  }
}

export default App;
