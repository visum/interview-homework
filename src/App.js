import React, { Component } from "react";
import NewsList from "./components/NewsList";
import Article from "./components/Article";
import articleData from "./data/article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={"/"} component={NewsList} />
            <Route path={"/article/:id"} component={Article} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
