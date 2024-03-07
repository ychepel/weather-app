const containerNode = document.getElementById('placeContainer');
const jsonData = 'https://ychepel.github.io/weather-app/data/attractions-data.json';

async function getPlaces() {
    const res = await fetch(jsonData);
    const data = await res.json();

    data.map(({title, desc, link, image}) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('image-card');

        const imageElement = document.createElement('img');
        imageElement.src = image;
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;
        const descElement = document.createElement('p');
        descElement.textContent = desc;
        const hrefElement = document.createElement('a');
        hrefElement.textContent = `${title} on Google Maps`;
        hrefElement.href = link;
        hrefElement.target = '_blank';

        cardElement.append(titleElement, descElement, imageElement, hrefElement);
        containerNode.append(cardElement);
    })
}

getPlaces();