import React, { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Karachi", "Islamabad"],
  },
  {
    name: "Bangladesh",
    value: "BN",
    cities: ["Dhaka", "Chittagong"],
  },
];

const DropDowns = () => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(""); // Initialize as an empty string
  const [selectedCity, setSelectedCity] = useState(""); // Initialize as an empty string

  const handleCountryChange = (e) => {
    setSelectedCountryIndex(e.target.value);
    setSelectedCity(""); // Clear the city selection when changing the country
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  console.log(selectedCity,"city");
  console.log(selectedCountryIndex,"country");
  return (
    <>
      {/* 1st Dropdown */}
      <select value={selectedCountryIndex} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={index}>
            {country.name}
          </option>
        ))}
      </select>

      {/* 2nd Dropdown */}
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {selectedCountryIndex !== "" &&
          countries[selectedCountryIndex]?.cities?.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
      </select>
    </>
  );
};

export default DropDowns;
