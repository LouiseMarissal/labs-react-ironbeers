import React, { useEffect, useState } from "react";
import beersAPI from "./../API/beersAPI";

export default function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    beersAPI
      .getRandom()
      .then(res => {
        setRandomBeer(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="random-beer-container">
      <div className="img-container">
        <img src={randomBeer.image_url} alt={randomBeer.name} />
      </div>

      <div className="text-random-beer">
        <div className="name-tagline-container">
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
        </div>
        <div className="brewed-attenuation-container">
          <h3>{randomBeer.attenuation_level}</h3>
          <p>
            <strong>{randomBeer.first_brewed}</strong>
          </p>
        </div>
      </div>
      <div className="description-random">
        <p>{randomBeer.description}</p>
        <p>
          <strong>{randomBeer.contributed_by}</strong>
        </p>
      </div>
    </div>
  );
}
