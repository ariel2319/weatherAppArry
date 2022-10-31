import React, { useEffect, useState } from 'react';
import axios from 'axios';

const City = ({city}) => {

  const [ newCity, setNewCity] = useState ({});
  const why = city

  useEffect ((why)=>{
    axios 
      .get(`https://api.openweathermap.org/data/2.5/weather?q=bowen&appid=d72dc64a8773cc838816fe9a3b81ea3d`)
      .then(res =>setNewCity(res.data))
  },[])
  console.log(newCity)
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default City;