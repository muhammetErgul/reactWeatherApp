import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather, fetchWeatherByCity } from "./Services";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    items: [],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, actions) => {
        state.items = actions.payload;
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, actions) => {
        state.items = actions.payload;
      });
  },
});
export const selectDays = (state) => state.weather.days;
export const selectItems = (state) => state.weather.items;
//export const {} = weatherSlice.actions;
export default weatherSlice.reducer;
