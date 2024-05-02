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
  renderSpinner();

  setTimeout(() => {
    hideSpinner();

    artists.forEach((artist) => {
      const { biography, id, name, activeSince, members, genre } = artist;
      $("#all-cards").innerHTML += `
      <div class="card" data-cardid="${id}">
        <h2 class="card-title">${name}</h2>
        <p class="card-biography">
        ${biography}
        </p>
        <div class="more-details-homepage">
          <p>
          ${genre}
          </p>
          <p>
          ${activeSince}
          </p>
          <p>
          ${members}
          </p>
        </div>
        <button class="card-btn" data-cardid="${id}">Click for more</button>
      </div>`;
    });
    assignEventToButton(document.querySelectorAll(".card-btn"));
  }, 2000);
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
  $("#all-cards").classList.add("hidden");
  renderSpinner();

  setTimeout(() => {
    hideSpinner();

    const { biography, id, name, activeSince, members, genre, image, origin } =
      artist;

    $("#individual-card-container").classList.remove("hidden");
    $("#individual-card-container").innerHTML = `
      <div class="artist-details">
       <a href="javascript:void(0)" class="homepage" onClick="backToHomepage()">< Take me back <</a>
        <div class="artist-info">
          <h2>${name}</h2>
          <div>
            <h4>About</h4>
            <p class="artist-bio">
            ${biography}
            </p>
          </div>
        </div>
        <img src="${image}" alt="${name}" />
        <div class="more-details">
          <p>
          ${genre}
          </p>
          <p>
          ${activeSince}
          </p>
          <p>
          ${origin}
          </p>
          <p>
          ${members}
          </p>
        </div>
        <div class="btn-container">
          <button class="edit-btn" data-cardid="${id}">Edit Artist</button>
          <button class="delete-btn" data-cardid="${id}">Delete</button>
        </div>
      </div>`;
    assignEventToDeleteButton(id);
    assignEventToEditBtn(id);
  }, 2000);
};

getArtists(baseUrl);

// Function to assign event to the 'Delete' button
const assignEventToDeleteButton = (artistId) => {
  $(".delete-btn").addEventListener("click", (e) => {
    console.log("Delete button clicked!", e.currentTarget.dataset.cardid);
    showDeleteModal(artistId);
  });
};

// Function to assign event to the 'Edit' button
const assignEventToEditBtn = (artistId) => {
  $(".edit-btn").addEventListener("click", (e) => {
    console.log("Edit button clicked!", e.currentTarget.dataset.cardid);
    renderEditForm(artistId);
  });
};

// BACK TO HOMEPAGE LINK (HEADER)
const backToHomepage = () => {
  console.log("click!!!");

  $("#all-cards").classList.add("hidden");
  $("#individual-card-container").classList.add("hidden");
  $("#add-artist-form").classList.add("hidden");
  $("#edit-artist-form").classList.add("hidden");
  $("#all-cards").innerHTML = "";
  $("#all-cards").classList.remove("hidden");

  getArtists(baseUrl);
};

$("#homepage-link").addEventListener("click", backToHomepage);
