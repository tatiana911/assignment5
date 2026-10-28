import { getWeatherInfo } from "../utils/weatherInfo.js";
export default function WeatherCard({ weather }) {
    const current = weather.current;
    const info = getWeatherInfo(current.weather_code);

    return (
        <section className="weather-card">
            <h2>{weather.city}, {weather.country}</h2>

            <p className="temperature">
                {current.temperature_2m}°C
            </p>
            <p>{info.description}</p>
            <p className="weather-icon" aria-hidden="true">
                {info.icon}
            </p>
            <div className="weather-details">
                <p>
                    Humidity: {current.relative_humidity_2m}%
                </p>

                <p>
                    Wind speed: {current.wind_speed_10m} km/h
                </p>
            </div>
        </section>
    );
}