import React from 'react';
import '.././'

const CountryName= ({name,population,capital}:{name:string,population:string,capital:string}) => {
  return (
    <div className="country_names">
      <h2>Name:{name}</h2>
      <h2>Population: {population}</h2>
      <h3>Capital: {capital}</h3>
    </div>
  );
};

export default CountryName;
