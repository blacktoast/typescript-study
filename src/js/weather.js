
const API_key="59abc033f64af22c1ac32786109371df"

function onDGeoOk(position){
let lat=position.coords.latitude;
let lng=position.coords.longitude;
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`
console.log(url);
fetch(url)
    .then(response => response.json()
    .then(data => console.log(data.weather[0].main)));

}

function onGeoError(){

}

navigator.geolocation.getCurrentPosition(onDGeoOk,onGeoError);
