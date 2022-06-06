var cityNameEl = document.querySelector('#city');
var cityFormEl = document.querySelector('#city-form');
var weatherEl = document.querySelector('#weather');
var weatherContainerEl = document.querySelector('#weather-container');
var forecastContainerEl = document.querySelector('#forecast-container');
var searchCity = document.querySelector('#search-city');
var lastEl = document.querySelector('#button-city');
var citySearchEl = document.querySelector('#city-searches');

// use code from activity 7 from class to help!! // gathered api's from openweather map site.
var getCityWeather = function (value) {
    fetch (`https://api.openweathermap.org/geo/1.0/direct?q=' + value + '&limit=1&appid=afbc3e766ad7b125ff6728193711f7c7`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        showWeather(lat, lon);
        storeCity(value);
    })
}

function showWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8d4d4e0925590d16cc122c92ab2023c&units=imperial`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        forecastContainerEl.innerHTML = ''; //directly adds to HTML text
        var temp = data.current.temp;
        var wind = data.current.wind_speed;
        var uvi = data.current.uvi;
        var humidity = data.current.humidity;
        var tempEl = document.createElement('p');
        var windEl = document.createElement('p');
        var uviEl = document.createElement('p');
        var humidityEl = document.createElement('p');
        var weatherContainerEl = document.createElement('p');

        tempEl.textContent = "Temp: " + temp;
        windEl.textContent = "Wind: " + wind;
        uviEl.textContent = "UV Index: " + uvi;
        humidityEl.textContent = "Humidity: " + temp;
        
        
        document.body.append(tempEl, windEl, uviEl, humidityEl)
        weatherContainerEl.append(document);

        //reviewed for loop with class mate

        for (var i = 0; i < 5; i++) {
            var day = data.daily[i];
            var max = day.temp.max;
            var min = day.temp.min;
            var average = Math.round((max + min) / 2);
            var tempF = average;
            var windF = day.wind_speed;
            var uvF = day.uvi;
            var humF =day.humidity;

            var tempElF = document.createElement('p');
            var windElF = document.createElement('p');
            var uvElF = document.createElement('p');
            var humElF = document.createElement('p');
            //var divContainer.className = "card5";       }
            
            tempElF.textContent = 'Temperature: ' + tempF;
            windElF.textContent = 'Wind Speed: ' + windF;
            uvElF.textContent = 'UV Index: ' + uvF;
            humElF.textContent = 'Humidity: ' + humF;
            
            divContainer.append(tempElF, windElF, uvElF, humElF);
            forecastContainerEl.append(divContainer);
        }
    })
}

// prevents page from stopping restarts the program...
var submitHandler = function (event) {
    event.preventDefault();
    var cityName = cityNameEl.ariaValueMax.trim();

    if (cityName) {
        getCityWeather(cityName);

        weatherContainerEl.textContent = '';
        cityNameEl.value = '';
    } else {
        alert('Please enter correct city name!')
    }
}
// if the correct city name is entered information will be displayed, otherwise you will get an alert to enter the correct city name.

// having to go through the java script a little slower to have better understand of how to input necessary information into each give element.

var buttonHandler = function (event) {
    var city = event.target.getAttribute('data-city');
    
    if (city) {
        getCityWeather(city);
        weatherContainerEl.textContent = '';
    }
};

function getCity(event) {
    event.preventDefault();
    getCityWeather(cityNameEl.value);
}

var storeCity = function (city) {
    var cities = JSON.parse(localStorage.getItem('cities')) || [];
    if (!cities.includes(city)) {
        cities.push(city);
        localStorage.setItem('cities', JSON.stringify(cities));
        displayLastCitiesButtons();
    }
}

var displayLastCitiesButtons = function () {
    var cities = JSON.parse(localStorage.getItem('cities')) || [];
    citySearchEl.innerHTML = null;
    for (var city of cities) {
        var cityBtn = document.createElement('button');
        cityBtn.dataset.city = city;
        cityBtn.className ='btn';
        cityBtn.textContent = city;
        citySearchEl.append(cityBtn);
    }
}
// event listenters should be at the end of the project.
cityFormEl.addEventListener('submit', submitHandler);
lastEl.addEventListener('click', buttonHandler);
displayLastCitiesButtons();






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