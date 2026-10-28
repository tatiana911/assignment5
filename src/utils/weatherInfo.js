export function getWeatherInfo(code) {
    if (code === 0) {
        return { description: "Clear sky", icon: "☀️" };
    } else if (code === 1) {
        return { description: "Mainly clear", icon: "🌤️" };
    } else if (code === 2) {
        return { description: "Partly cloudy", icon: "⛅" };
    } else if (code === 3) {
        return { description: "Overcast", icon: "☁️" };
    } else if (code === 45 || code === 48) {
        return { description: "Fog", icon: "🌫️" };
    } else if (code >= 51 && code <= 57) {
        return { description: "Drizzle", icon: "🌦️" };
    } else if (code >= 61 && code <= 67) {
        return { description: "Rain", icon: "🌧️" };
    } else if (code >= 71 && code <= 77) {
        return { description: "Snow", icon: "❄️" };
    } else if (code >= 80 && code <= 82) {
        return { description: "Rain showers", icon: "🌧️" };
    } else if (code === 85 || code === 86) {
        return { description: "Snow showers", icon: "🌨️" };
    } else if (code >= 95 && code <= 99) {
        return { description: "Thunderstorm", icon: "⛈️" };
    } else {
        return { description: "Unknown conditions", icon: "❔" };
    }
}