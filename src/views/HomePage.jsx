import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="beers-container">
        <NavLink to="/beers">
          <img src="./images/beers.png" alt="beers" />
          <h3>All Beers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rhoncus tempor neque, nec accumsan arcu viverra ut. Quisque et
            sagittis tortor.
          </p>
        </NavLink>
      </div>
      <div className="beers-container">
        <NavLink to="/random-beer">
          <img src="./images/random-beer.png" alt="random beer" />
          <h3>Random Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rhoncus tempor neque, nec accumsan arcu viverra ut. Quisque et
            sagittis tortor. Nunc tristique nunc eros, malesuada mattis leo
            tincidunt non.
          </p>
        </NavLink>
      </div>

      <div className="beers-container">
        <NavLink to="/new-beer">
          <img src="./images/new-beer.png" alt="new beer" />
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rhoncus tempor neque, nec accumsan arcu viverra ut. Quisque et
            sagittis tortor. Nunc tristique nunc eros, malesuada mattis leo
            tincidunt non.
          </p>
        </NavLink>
      </div>
    </div>
  );
};
export default HomePage;
