import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

import { getWeather } from "./services/weather.js";

export default function App() {
    const [search, setSearch] = useState(null);
    const [weather, setWeather] = useState(null);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    function handleSearch(searchQuery) {
    if (!searchQuery) {
        setSearch(null);
        setError("Please enter a city name.");
        setStatus("error");
        return;
    }

    setSearch({ city: searchQuery });
  }

    useEffect(() => {
        if (!search) {
            return;
        }

        let ignore = false;

        async function loadWeather() {
            setStatus("loading");
            setError("");

            try {
                const data = await getWeather(search.city);

                if (!ignore) {
                    setWeather(data);
                    setStatus("success");
                }
            } catch (error) {
                if (!ignore) {
                    setError(error.message);
                    setStatus("error");
                }
            }
        }

        loadWeather();

        return () => {
            ignore = true;
        };
    }, [search]);

    return (
        <>
            <header>
                <h1>Weather Dashboard</h1>
                <p>Search for a city to see its current weather.</p>
            </header>

            <main>
                <SearchBar
                  onSearch={handleSearch}
                  loading={status === "loading"}
                />

                {status === "idle" && (
                    <p>Enter a city name to get started.</p>
                )}

                {status === "loading" && <LoadingSpinner />}

                {status === "error" && (
                    <ErrorMessage message={error} />
                )}

                {status === "success" && (
                    <WeatherCard weather={weather} />
                )}
            </main>
        </>
    );
}