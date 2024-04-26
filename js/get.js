const $ = (selector) => document.querySelector(selector);

baseUrl = "https://661ae13565444945d04eb357.mockapi.io/api/artists";

// Function to fetch artists' data
const getArtists = (fetchUrl) => {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => renderArtists(data))
    .catch((error) => console.error(error));
};

// Function to render the list of artists on the homepage
const renderArtists = (artists) => {
  artists.forEach((artist) => {
    const { biography, id, name, activeSince, members, genre, origin } = artist;
    $("#all-cards").innerHTML += `
      <div class="card" data-cardid="${id}">
        <h2 class="card-title">${name}</h2>
        <p class="card-biography">${biography}</p>
        <div class="more-details-homepage">
          <p>${genre}</p>
          <p>${activeSince}</p>
          <p>${origin}</p>
          <p>${members}</p>
        </div>
        <button class="card-btn" data-cardid="${id}">Click for more</button>
      </div>`;
  });
  assignEventToButton(document.querySelectorAll(".card-btn"));
};

// Function to assign event to each 'Click for more' button
const assignEventToButton = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      getDetails(e.currentTarget.dataset.cardid);
    });
  });
};

// Function to fetch details of a specific artist
const getDetails = (idArtist) => {
  fetch(`${baseUrl}/${idArtist}`)
    .then((res) => res.json())
    .then((data) => renderDetails(data))
    .catch((err) => console.error(err));
};

// Function to render individual artist details
const renderDetails = (artist) => {
  $("#all-cards").innerHTML = "";
  renderSpinner();

  setTimeout(() => {
    hideSpinner();

    const { biography, id, name, activeSince, members, genre, image, origin } =
      artist;

    $("#individual-card-container").innerHTML = `
      <div class="artist-details">
        <p class="homepage">< Take me back <</p>
        <div class="artist-info">
          <h2>${name}</h2>
          <div>
            <h4>About</h4>
            <p class="artist-bio">${biography}</p>
          </div>
        </div>
        <img src="${image}" alt="${name}" />
        <div class="more-details">
          <p>${genre}</p>
          <p>${activeSince}</p>
          <p>${origin}</p>
          <p>${members}</p>
        </div>
        <div class="btn-container">
          <button class="edit-btn" data-cardid="${id}">Edit Artist</button>
          <button class="delete-btn" data-cardid="${id}">Delete</button>
        </div>
      </div>`;
  }, 2000);
};

getArtists(baseUrl);
