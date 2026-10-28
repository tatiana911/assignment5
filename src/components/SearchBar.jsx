import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
    const [query, setQuery] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (loading) {
            return;
        }

        onSearch(query.trim());
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="city-input">City name</label>

            <input
                id="city-input"
                type="text"
                placeholder="For example: Beirut"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}