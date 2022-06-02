var apiURl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
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
// fetch('')
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {

// })