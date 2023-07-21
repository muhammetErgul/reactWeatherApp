import React, { useEffect } from "react";
import CityData from "../Data.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherByCity } from "../redux/Services";
import { FaLocationPin } from "react-icons/fa6";
function Dropdown() {
  const [city, setCity] = useState(CityData[33].name);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchWeatherByCity(city));
  }, [city, dispatch]);

  //console.log(city);
  return (
    <div className="select-box">
      <select className="cities" value={city} onChange={handleChange}>
        {CityData.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <div className="coords">
        <FaLocationPin />
      </div>
    </div>
  );
}

export default Dropdown;
