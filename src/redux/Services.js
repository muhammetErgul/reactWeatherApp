import { createAsyncThunk } from "@reduxjs/toolkit";
import { groupWeatherDataByDay } from "../getWeatherDay";
import axios from "axios";
const API_KEY = "0ed6f2a1de4622452b9f5f05f31ac7a0";

// Fetch weather longitude and latitude
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ latitude, longitude }) => {
    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      return groupWeatherDataByDay(data);
    } catch (error) {
      console.log(error);
      //window.alert("Please allow location access");
    }
  }
);

// Fetch weather by city
export const fetchWeatherByCity = createAsyncThunk(
  "weather/fetchWeatherByCity",
  async (cityName) => {
    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      return groupWeatherDataByDay(data);
    } catch (error) {
      console.log(error);
      // window.alert("Please allow location access");
    }
  }
);
