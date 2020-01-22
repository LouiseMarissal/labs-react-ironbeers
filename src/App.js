import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./views/HomePage";
import "./App.scss";
import NavBar from "./components/NavBar";
import SingleBeer from "./views/SingleBeer";
import ListBeer from "./views/ListBeer";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers/:id" component={SingleBeer} />
        <Route path="/beers" component={ListBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/search?q=${query}" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
