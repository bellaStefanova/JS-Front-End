function attachEvents() {
    let getWeatherButton = document.getElementById('submit');
    let location;
    let currentLocation;
    let currentLocationCode;
    getWeatherButton.addEventListener('click', getWeather);

    function getWeather() {
        location = document.getElementById('location');
        currentLocation = location.value;
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then((response) => response.json())
            .then((data) => { getLocation(data) })
            .catch((error) => console.error(error));
    }

    function getLocation(data) {
        currentLocationCode = data.find(x => x.name === currentLocation).code;
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentLocationCode}`)
            .then((response) => response.json())
            .then((data) => { displayWeather(data) })
            .catch((error) => console.error(error));
    }

    function displayWeather(data) {
        let currentConditionsDiv = document.querySelector('#current');
        let forecast = document.getElementById('forecast');
        forecast.style.display = 'block';

        let currentLocation = document.getElementById('location').value;
        let currentLocationName = data.name;
        let currentCondition = data.forecast.condition;
        let high = data.forecast.high;
        let low = data.forecast.low;
        let symbol = getSymbol(currentCondition);

        let divForecast = document.querySelector('#current');
        divForecast.innerHTML += `
        <div class="forecasts">
        <span class="condition symbol">${symbol}</span>
        <span class="condition">
            <span class="forecast-data">${currentLocationName}</span>
            <span class="forecast-data">${low}°/${high}°</span>
            <span class="forecast-data">${currentCondition}</span>
        </span>
        </div>`;

        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentLocationCode}`)
            .then((response) => response.json())
            .then((data) => { displayUpcomingWeather(data) })
            .catch((error) => console.error(error));
    }

    function displayUpcomingWeather(data) {

        let upcomingDiv = document.querySelector('#upcoming');
        upcomingDiv.innerHTML += `<div class="forecast-info">
        <span class="upcoming">
        <span class="symbol">${getSymbol(data.forecast[0].condition)}</span>
        <span class="forecast-data">${data.forecast[0].low}°/${data.forecast[0].high}°</span>
        <span class="forecast-data">${data.forecast[0].condition}</span>
        </span>
        <span class="upcoming">
        <span class="symbol">${getSymbol(data.forecast[1].condition)}</span>
        <span class="forecast-data">${data.forecast[1].low}°/${data.forecast[1].high}°</span>
        <span class="forecast-data">${data.forecast[1].condition}</span>
        </span>
        <span class="upcoming">
        <span class="symbol">${getSymbol(data.forecast[2].condition)}</span>
        <span class="forecast-data">${data.forecast[2].low}°/${data.forecast[2].high}°</span>
        <span class="forecast-data">${data.forecast[2].condition}</span>
        </span>
        </div>`;
    }

    function getSymbol(condition) {
        let symbol;
        switch (condition) {
            case 'Sunny':
                symbol = '☀';
                break;
            case 'Partly sunny':
                symbol = '⛅';
                break;
            case 'Overcast':
                symbol = '☁';
                break;
            case 'Rain':
                symbol = '☂';
                break;
        }
        return symbol;
    }
}

attachEvents();