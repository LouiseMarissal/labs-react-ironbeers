import React from "react";
import Link from "react";

const HomePage = () => {
  return (
    <div className="homePage">
      <Link to="/beers">
        <img src="./images/beers.png" alt="beers" />
        <h3>All Beers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          rhoncus tempor neque, nec accumsan arcu viverra ut. Quisque et
          sagittis tortor.
        </p>
      </Link>
      <Link to="/random-beers">
        <img src="./images/random-beer.png" alt="random beer" />
        <h3>Random Beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          rhoncus tempor neque, nec accumsan arcu viverra ut. Quisque et
          sagittis tortor. Nunc tristique nunc eros, malesuada mattis leo
          tincidunt non.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src="./images/new-beer" alt="new beer" />
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          rhoncus tempor neque, nec accumsan arcu viverra ut. Quisque et
          sagittis tortor. Nunc tristique nunc eros, malesuada mattis leo
          tincidunt non.
        </p>
      </Link>
    </div>
  );
};
export default HomePage;
