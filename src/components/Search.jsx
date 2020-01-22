import React, { useState } from "react";
import beersAPI from "./../API/beersAPI";
export default function Search() {
  const [query, setQuery] = useState("");

  const handleChange = evt => {
    evt.preventDefault();
    console.log(evt.target.value);
    beersAPI
      .getQuery()
      .then(res => {
        setQuery({ ...query, [evt.target.name]: evt.target.value });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="search">
      <input
        className="form-control"
        type="text"
        placeholder="search beer"
        onChange={handleChange}
      />
    </div>
  );
}
