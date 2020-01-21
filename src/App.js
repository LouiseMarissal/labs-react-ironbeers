import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import "./App.css";
import NavBar from "./components/NavBar";
import SingleBeer from "./views/SingleBeer";
import ListBeer from "./views/ListBeer";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/beers" component={ListBeer} />
          <Route path="/:id" component={SingleBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
