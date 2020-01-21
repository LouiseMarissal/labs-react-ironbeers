import React from "react";

const BeerCard = props => {
  // ecrire fonction ici

  return (
    <div className="beer-card-container">
      <div className="beer-card-omg">
        <img src={props.image_url} alt="beer picure" />
      </div>
      <div className="beer-card-text">
        <div>
          <h3>{props.name}</h3>
          <p>{props.tagline}</p>
        </div>
        <div>
          <h3> {props.attenuation_level} </h3>
          <p>{props.first_brewed}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
