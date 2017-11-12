import React, { Component } from "react";
import NewsList from "./components/NewsList";
import Article from "./components/Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import enquire from "enquire.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileHandler: null,
      inMobile: false
    };
  }

  componentWillMount() {
    let handler = enquire.register("screen and (max-width:45em)", {
      match: () => {
        this.setState({
          inMobile: true
        });
      },
      unmatch: () => {
        this.setState({
          inMobile: false
        });
      }
    });
    this.setState({
      mobileHandler: handler
    });
  }

  componentWillUnmount() {
    enquire.unregister(this.state.mobileHandler);
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={"/"} render={ () => <NewsList inMobile={this.state.inMobile} /> }  />
            <Route path={"/article/:id"} component={Article} inMobile={this.state.inMobile}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
