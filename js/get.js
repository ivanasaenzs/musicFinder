const $ = (selector) => document.querySelector(selector);

baseUrl = "https://661ae13565444945d04eb357.mockapi.io/api/artists";

const getArtist = (fetchUrl) => {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => renderArtist(data))
    .catch((error) => console.error(error));
};

getArtist(baseUrl);

const renderArtist = (artists) => {
  $("#card-container").innerHTML = "";
  artists.forEach((artist) => {
    const { biography, id, name } = artist;
    console.log(name, id);
    $("#card-container").innerHTML += `<div class="card">
       <h2 class="card-title">${name}</h2>
       <p class="card-biography">
       ${biography}
       </p>
        <div class="more-details-homepage">
          <p>genre</p>
          <p>active since</p>
          <p>origin</p>
          <p>artist type</p>
        </div>
       <button class="card-btn data-cardId="${id}">Click for more</button>
      </div>`;
  });
};
