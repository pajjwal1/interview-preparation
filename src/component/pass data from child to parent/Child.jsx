import React, { useState } from "react";

const Child = ({ getData }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    getData((prev) => [...prev, { name, city, country }]);
    setName("");
    setCity("");
    setCountry("");
  };
  return (
    <>
      <input
        placeholder="enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="enter your city"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="enter your country"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </>
  );
};

export default Child;
