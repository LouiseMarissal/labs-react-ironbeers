import React, { useEffect, useState } from "react";
import beersAPI from "./../API/beersAPI";

export default function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    beersAPI
      .getRandom()
      .then(res => {
        setRandomBeer(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <div>{randomBeer.name}</div>
    </div>
  );
}
