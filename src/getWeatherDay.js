export const groupWeatherDataByDay = (data) => {
  const dailyWeatherData = [];
  const days = {};

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });

    if (!days[day]) {
      days[day] = true;
      dailyWeatherData.push(item);
    }
  });

  return dailyWeatherData;
};
