const $ = (selector) => document.querySelector(selector);

baseUrl = "https://661ae13565444945d04eb357.mockapi.io/api/artists";

const getArtists = (fetchUrl) => {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => renderArtists(data))
    .catch((error) => console.error(error));
};

getArtists(baseUrl);

const renderArtists = (artists) => {
  artists.forEach((artist) => {
    const { biography, id, name } = artist;
    console.log(name, id);
    $(".all-cards").innerHTML += `
    <div class="card">
       <h2 class="card-title">${name}</h2>
       <p class="card-biography">
       ${biography}
       </p>
        <div class="more-details-homepage">
          <p>${genre}</p>
          <p>${activeSince}</p>
          <p>${origin}</p>
          <p>${members}</p>
        </div>
       <button class="card-btn" data-cardId="${id}">Click for more</button>
      </div>
      `;
  });
};
