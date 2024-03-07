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
  // const resGeo = await fetch(
  //   "https://get.geojs.io/v1/ip/geo.json"
  // );
  // const dataGeo = await resGeo.json();
  // const {latitude, longitude, city, country} = dataGeo;

  // const resWeather = await fetch(
  //   `https://api.weatherapi.com/v1/current.json?key=13974d32ad974aa1871200231240603&q=${latitude},${longitude}&aqi=no`
  // );
  // const dataWeather = await resWeather.json();
  // console.log(dataWeather);
  // const {temp_c, wind_kph, condition} = dataWeather.current;
  // const {text, icon} = condition;

  loaderNode.style.display = "none";
  cityCardNode.style.display = "block";

  country = 'Germany';
  city = 'Plauen';
  temp_c = 2;
  wind_kph = 13;
  text = 'Partly cloudy';
  icon = 'http://cdn.weatherapi.com/weather/64x64/day/116.png';

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

async function test() {
  const url = 'https://map-places.p.rapidapi.com/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&keyword=cruise&type=restaurant';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6deac19c98msh693a20409929614p1802bcjsn3cbe9dc936f4',
		'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

setTimeout(() => {
  fetchWeather()
}, 1500);

test();
