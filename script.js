var cityNameEl = document.querySelector('#city');
var cityFormEl = document.querySelector('#city-form');
var weatherEl = document.querySelector('#weather');
var weatherContainerEl = document.querySelector('#weather-container');
var forecastContainerEl = document.querySelector('#forecast-container');
var searchCity = document.querySelector('#search-city');
var lastEl = document.querySelector('#button-city');
var citySearchEl = document.querySelector('#city-searches');


// having to go through the java script a little slower to have better understand of how to input necessary information into each give element.







// var apiURl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'
// var apiKey = 'a8d4d4e0925590d16cc122c92ab2023c';
// var coordsUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`;
// var temp = data.current.temp;
// var wind = data.current.wind_speed;
// var uvi = data.current.uvi;
// var humidity = data.current.humidity;
// var tempEl = document.createElement('p');
// var windEl = document.createElement('p');
// var uviEl = document.createElement('p');
// var humidityEl = document.createElement('p');

// function init() {

//     function getWeatherData(value) {
//         fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 var lat = data [0].lat;
//                 var lon = data [0].lon;
//                 showWeather(lat, lon);
//                 storeCity(value);


//             });
//     }
// }


// init();

// temp.textContent = "Temp: " + temp;
// tempEl.textContent = "Temp: " + temp;
// windEl.textContent = "Wind: " + wind;
// uviEl.textContent = "UV Index: " + uvi;
// humidityEl.textContent = "Humidity: " + temp;
// document.body.append(tempEl, windEl, uviEl, humidityEl)
// // fetch('')
// // .then(function (response) {
// //     return response.json();
// // })
// // .then(function (data) {

// // })
function init() {


fetch('https://api.github.com/orgs/twitter/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Public Members: Raw data \n----------');
    console.log(data);
  });
}

function getWeatherData() {
fetch('https://api.github.com/orgs/twitter/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repositories: Names only \n----------');
   
  });
}

  init();