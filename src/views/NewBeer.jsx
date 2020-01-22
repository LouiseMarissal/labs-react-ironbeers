import React, { useState, useRef } from "react";
import beersAPI from "./../API/beersAPI";

export default function NewBeer() {
  const [formValues, setFormValues] = useState({});

  const handleChange = evt => {
    evt.preventDefault();
  };
  const handleSubmit = e => {
    e.preventDefault();
    beersAPI
      .createNew()
      .then(res => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        res.send(res.response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        action="POST"
        className="form-group"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <label htmlFor="name">Name</label>
        <input className="form-control" name="name" type="text" />
        <label htmlFor="tagline">Tagline</label>
        <input className="form-control" name="tagline" type="text" />
        <label htmlFor="description">Description</label>
        <input
          className="form-control"
          name="description"
          type="text"
          row="3"
        />
        <label htmlFor="first_brewed">First brewed</label>
        <input className="form-control" type="text" name="first_brewed" />
        <label htmlFor="brewers_tips"> Brewers tips</label>
        <input className="form-control" type="text" names="brewers_tips" />
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          className="form-control"
          type="number"
          name="attenuation_level"
        />
        <label htmlFor="contributed_by">Contributed by</label>
        <input className="form-control" type="text" name="contributed_by" />
        <button type="submit" className="btn btn-primary">
          ADD NEW
        </button>
      </form>
    </div>
  );
}
