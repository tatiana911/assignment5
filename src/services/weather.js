async function getJSON(url) {
    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 429) {
            throw new Error("Too many requests. Please try again later.");
        }

        throw new Error(
            `Request failed (${response.status}). Please try again.`
        );
    }

    const data = await response.json();
    return data;
}
export async function getWeather(city) {
    const cityParams = new URLSearchParams({
        name: city,
        count: 1
    });

    const cityURL =
        `https://geocoding-api.open-meteo.com/v1/search?${cityParams}`;

    const cityData = await getJSON(cityURL);

    if (!cityData.results || cityData.results.length === 0) {
        throw new Error("City not found. Please check the spelling.");
    }

    const location = cityData.results[0];

    const weatherParams = new URLSearchParams({
        latitude: location.latitude,
        longitude: location.longitude,
        current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
        timezone: "auto"
    });

    const weatherURL =
        `https://api.open-meteo.com/v1/forecast?${weatherParams}`;

    const weatherData = await getJSON(weatherURL);

    return {
        city: location.name,
        country: location.country,
        current: weatherData.current
    };
}