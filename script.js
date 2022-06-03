var apiURl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
var apiKey = 'a8d4d4e0925590d16cc122c92ab2023c';
var coordsUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`;
var temp = data.current.temp;
var wind = data.current.wind_speed;
var uvi = data.current.uvi;
var humidity = data.current.humidity;
var tempEl = document.createElement('p');
var windEl = document.createElement('p');
var uviEl = document.createElement('p');
var humidityEl = document.createElement('p');

function init() {

    function getWeatherData(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={API key}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {


            });
    }
}


init();

temp.textContent = "Temp: " + temp;
tempEl.textContent = "Temp: " + temp;
windEl.textContent = "Wind: " + wind;
uviEl.textContent = "UV Index: " + uvi;
humidityEl.textContent = "Humidity: " + temp;
document.body.append(tempEl, windEl, uviEl, humidityEl)
// fetch('')
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {

// })