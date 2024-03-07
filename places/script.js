const jsonData = 'https://ychepel.github.io/weather-app/data/attractions-data.json';

async function getPlaces() {
    const res = await fetch(jsonData);
    const data = await res.json();

    console.log(data);
}

getPlaces();