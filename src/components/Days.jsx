import { useDispatch, useSelector } from "react-redux";
import { selectDays } from "../redux/weatherSlice";
import { selectItems } from "../redux/weatherSlice";
import React, { useEffect, useState } from "react";
import { fetchWeather } from "../redux/Services";

function Days() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const days = useSelector(selectDays);
  const weaters = useSelector(selectItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }

    dispatch(fetchWeather({ latitude: lat, longitude: lon }));
  }, [dispatch, lat, lon]);

  return (
    <div className="days">
      {weaters.map((item, ind) => (
        <div className="day" key={ind}>
          <div className="day-title">
            {" "}
            {days[new Date(item.dt * 1000).getDay()]}
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}
            alt=""
          />
          <div className="day-deg">
            <div className="degs">
              <span>{item.main.temp_max} &deg;</span>
              <span>
                {item.main.temp_min}
                &deg;
              </span>
            </div>
            <div className="wind">
              <span>Pressure: {item.main.pressure}</span>
              <span>Wind: {item.wind_speed} kmph</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Days;
