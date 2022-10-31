import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles.css'
/* import City from './City' 
 */
//datos: país, ciudad, icono que describa el clima, temperatura en grados centígrados.

const Weather = () => {
  const [ weather, setWeather] = useState ({});
  const [ isCelcius, setIsCelcius ] = useState ();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true, //para mejorar la geolocalización
      timeout: 5000,
    };
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d72dc64a8773cc838816fe9a3b81ea3d&units=metric`)
        .then(res => setWeather(res.data));
    }
      
    navigator.geolocation.getCurrentPosition(success, error, options);
  },[])

  console.log(weather)
  return (
    <div>
        <h3 className='title'>Weather App</h3>
        <h2 className='city'>{weather.name}, {weather.sys?.country}</h2>
        <div>
          <h1 className='temperature'>
            {isCelcius ? `${weather.main?.temp.toFixed(1)}`  :`${weather.main?.temp.toFixed(0) * 1.8 + 32}`}
            {isCelcius ? <span>°C</span> : <span>°F</span> }
          </h1>
          <h3>{weather.weather?.[0].description}</h3>
          <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
        {/* {weather.weather?.[0].icon.includes('n') ? <h2>Noche</h2> : <h2>Día</h2>} */} 
      </div>
      <button onClick={()=> setIsCelcius(!isCelcius)}>🔄</button>
      <div>
        <ul>
          <li><i class="fa-solid fa-wind"></i>  Wind Speed: {weather.wind?.speed} m/s</li>
          <li><i class="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all}% </li>
          <li><i class="fa-solid fa-temperature-half"></i>   Pressure: {weather.main?.pressure} hPa </li>
          <li><i class="fa-solid fa-droplet"></i>  Humidity: {weather.main?.humidity}% </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Weather;