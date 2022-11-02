import React from 'react';

const InfoLi = ({weather}) => {

  return ( 
    <div>
      <ul>
          <li><i className="fa-solid fa-wind"></i>  Wind Speed: {weather.wind?.speed} m/s</li>
          <li><i className="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all}% </li>
          <li><i className="fa-solid fa-temperature-half"></i>   Pressure: {weather.main?.pressure} hPa </li>
          <li><i className="fa-solid fa-droplet"></i>  Humidity: {weather.main?.humidity}% </li>
        </ul>
    </div>
  );
};

export default InfoLi;