import { useEffect, useState } from "react";
import Country from "./Country";
import "./countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  return (
    <div>
      <div>
        <h3>Visited countries: {visitedCountries.length}</h3>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Countries: {countries.length} </h2>
        <div className="country-container">
          {countries.map((country) => (
            <Country
              key={country.cca3}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
            ></Country>
          ))}
        </div>
      </div>
    </div>
  );
}
