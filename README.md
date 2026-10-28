# Assignment 5 — React Weather Dashboard

A responsive weather dashboard rebuilt with React and Vite.
Users can search for a city and view its current weather.

## Installation and Running

Requirements: Node.js and npm.

1. Download and extract the project ZIP, or clone the repository.
2. Open a terminal inside the project folder.
3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the Local URL displayed in the terminal.

On Windows, if PowerShell blocks npm.ps1, use npm.cmd install
and npm.cmd run dev instead.

An internet connection is required for weather requests.

## Features

- Search by clicking Search or pressing Enter.
- Display city, country, temperature, conditions, and a weather icon.
- Display humidity and wind speed.
- Show an animated loading spinner.
- Disable Search while loading.
- Display errors for invalid input, unknown cities, and failed requests.
- Support searching the same city again after an error.
- Responsive pink design for mobile and desktop.

## Components

Each component is in its own file.

- App.jsx: owns shared state, fetches weather through an effect,
  and chooses which interface state to display.
- SearchBar.jsx: controlled city input and search form.
- WeatherCard.jsx: displays weather received through props.
- LoadingSpinner.jsx: displays the loading indicator.
- ErrorMessage.jsx: displays an error message received through props.

## State and Props

SearchBar uses useState for the input text.

App uses useState for the submitted search, weather data,
request status, and error message.

Shared state lives in App, the closest common parent.
App passes a search callback and loading flag to SearchBar,
weather data to WeatherCard, and an error message to ErrorMessage.

Props flow directly from App to its children.
There is no prop drilling beyond one level, so Context is unnecessary.

## Effect and Data Fetching

A useEffect in App runs when the submitted search object changes.
An async function inside the effect fetches the city's coordinates,
then its current weather.

The effect uses try/catch and updates loading, success, or error state.
Its cleanup prevents outdated requests from updating state.

Each submission creates a new search object, allowing the same
city to be searched again.

## Supporting Files

- src/services/weather.js: API requests and HTTP response checks.
- src/utils/weatherInfo.js: converts weather codes into descriptions and icons.
- src/index.css: theme, layout, responsiveness, and spinner animation.

## API

Weather data is provided by Open-Meteo:
https://open-meteo.com/

The project uses its Geocoding and Forecast APIs.
No API key is required for this setup.

## Validation

Manually checked:

- Successful searches, Enter submission, and repeated city searches.
- Unknown city and spaces-only input.
- Offline errors and recovery.
- Loading spinner and disabled Search button.
- Layouts at 375px and 1024px.

Code checks:

- npm run lint
- npm run build