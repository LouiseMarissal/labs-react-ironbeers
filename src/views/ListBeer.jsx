import React, { useEffect, useState } from "react";
import beersAPI from "../API/beersAPI";
import { NavLink } from "react-router-dom";

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
      {beers.length === 0 ? (
        <div>..Loading</div>
      ) : (
        <div className="beer-list-container">
          {beers.map((beer, i) => (
            <NavLink to={`/beers/${beer._id}`} key={i}>
              <div className="beer-list">
                <div className="img-container">
                  <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className="list-text-container">
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>
                    <strong>Created By :</strong> {beer.contributed_by}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListBeer;
