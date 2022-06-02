window.addEventListener('load', ()=> {
    var long;
    var lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(space => {
            long = space.coords.longitude;
            lat = space.coords.latitude;

            var api =`https://openweathermap.org/a8d4d4e0925590d16cc122c92ab2023c`;
        })
    }
})