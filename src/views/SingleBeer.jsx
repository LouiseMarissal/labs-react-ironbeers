import React, { useEffect, useState } from "react";
import beersAPI from "./../API/beersAPI";

export default function SingleBeer(props) {
  const [beer, setBeer] = useState({});
  console.log(beer);

  useEffect(() => {
    beersAPI
      .getOne("/beers/" + props.match.params.id)
      .then(res => {
        setBeer(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return (
    <div>
      <div>{beer.name}</div>
      <img src={beer.image_url} alt={beer.name} />
    </div>
  );
}
