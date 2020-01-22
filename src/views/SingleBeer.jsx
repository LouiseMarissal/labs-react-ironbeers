import React, { useEffect, useState } from "react";
import beersAPI from "./../API/beersAPI";

export default function SingleBeer(props) {
  const [beer, setBeer] = useState({});
  console.log(beer);

  useEffect(() => {
    beersAPI
      .getOne(props.match.params.id)
      .then(res => {
        setBeer(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(props.match.params.id);
  return (
    <div className="single-beer-container">
      <div className="img-container">
        <img src={beer.image_url} alt={beer.name} />
      </div>

      <div className="text-single-beer">
        <div className="name-tagline-container">
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
        </div>
        <div className="brewed-attenuation-container">
          <h3>{beer.attenuation_level}</h3>
          <p>
            <strong>{beer.first_brewed}</strong>
          </p>
        </div>
      </div>
      <div className="description-single">
        <p>{beer.description}</p>
        <p>
          <strong>{beer.contributed_by}</strong>
        </p>
      </div>
    </div>
  );
}
