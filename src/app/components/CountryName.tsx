import React from 'react';
// import "./styles.css"

const CountryNames= ({name,population,capital}:{name:string,population:number,capital:string}) => {
  return (
    <div className='cnames'>
      <h2>Name: {name}</h2>
      <p></p>
      <h2>Population: {population}</h2>
      <p></p>
      <h3>Capital: {capital}</h3> 
    </div>
  );
};



export default CountryNames;
