import { useEffect, useState } from "react";

const API_KEY = "3eaa0afa663472c1868c88a26f4b3e94";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState("40.00302")
  const [lon, setLon] = useState("-82.98027")

  async function fetchWeather() {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`City not found. HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setWeather(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather()
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Enter latitude"
      />
      <input
        type="text"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
        placeholder="Enter longitude"
      />
      <button onClick={fetchWeather}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>There is an issue fetching your data: {error.message}</p>}
      {weather && !loading && (
        <div>
          <h1>{weather.name}</h1>
          <p>Temperature: {Math.round(weather.main.temp)}°F</p>
          <p>Feels like: {Math.round(weather.main.feels_like)}°F</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
