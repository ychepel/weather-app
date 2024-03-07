const loaderNode = document.getElementById('loader');
const cityCardNode = document.getElementById('cityCard');
const countryNode = document.getElementById('country');
const cityNode = document.getElementById('city');
const temperatureNode = document.getElementById('temperature');
const windSpeedNode = document.getElementById('windSpeed');
const weatherDescriptionNode = document.getElementById('weatherDescription');
const weatherImageNode = document.getElementById('weatherIcon');
const timeNode = document.getElementById('time');

async function fetchWeather() {
  const resGeo = await fetch(
    "https://get.geojs.io/v1/ip/geo.json"
  );
  const dataGeo = await resGeo.json();
  const {latitude, longitude, city, country} = dataGeo;

  const resWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=13974d32ad974aa1871200231240603&q=${latitude},${longitude}&aqi=no`
  );
  const dataWeather = await resWeather.json();
  const {temp_c, wind_kph, condition} = dataWeather.current;
  const {text, icon} = condition;

  loaderNode.style.display = "none";
  cityCardNode.style.display = "block";

  timeNode.textContent = getCurrentTime();
  countryNode.textContent = country;
  cityNode.textContent = city;
  temperatureNode.textContent = temp_c + ' °C';
  windSpeedNode.textContent = wind_kph + ' km/h';
  weatherDescriptionNode.textContent = text;
  weatherImageNode.src = icon;
}

function getCurrentTime() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let minutes = currentDate.getMinutes();
    minutes = (minutes < 10 ? '0' : '') + minutes;
    const formattedTime = daysOfWeek[currentDate.getDay()] + ', ' + currentDate.getHours() + ':' + minutes;

    return formattedTime;
}

setTimeout(() => {
  fetchWeather()
}, 1500);

