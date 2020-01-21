import React, { useEffect, useState } from "react";
import beersAPI from "../API/beersAPI";
import NavBar from "./../components/NavBar";

const ListBeer = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    beersAPI
      .getAll()
      .then(res => {
        setBeers(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        {beers.map((beer, i) => (
          <div key={i} className="beer-list">
            <div>
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Created By : {beer.contributed_by}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBeer;
