const addBtn = document.getElementById("add-btn-nav");
const homepageCards = document.getElementById("all-cards");

const cancelAdd = () => {
  homepageCards.classList.remove("hidden");
  const addForm = document.getElementById("add-artist-form");
  addForm.classList.add("hidden");
  console.log("cancel add button clicked!!!");
};

const showAddForm = () => {
  homepageCards.classList.add("hidden");

  const mainContainer = document.getElementById("card-container");
  mainContainer.innerHTML = `
     <form id="add-artist-form" class="add-artist-form">
        <!-- Artist name input -->
        <label for="artist-name">Artist Name:</label>
        <input type="text" id="artist-name" />
        <!-- Biography input -->
        <label for="add-biography">Biography:</label>
        <textarea id="add-biography" cols="20" rows="5"></textarea>
        <!-- Genre select -->
        <label for="add-genre">Genre:</label>
        <select name="genre" id="add-genre">
          <option value="genre" selected disabled>Choose genre</option>
          <option value="country">Country</option>
          <option value="edm">EDM</option>
          <option value="indie">Indie</option>
          <option value="kpop">K-pop</option>
          <option value="rock">Rock</option>
          <option value="metal">Metal</option>
          <option value="pop">Pop</option>
        </select>
        <!-- Formation years select -->
        <label for="add-active-since">Formation:</label>
        <select name="active-since" id="add-active-since">
          <option value="active-since" selected disabled>Active since</option>
          <option value="1970s">1970s or before</option>
          <option value="1980s">1980s</option>
          <option value="1990s">1990s</option>
          <option value="2000s">2000s</option>
          <option value="2010s">2010s</option>
          <option value="2020s">2020s</option>
        </select>
        <!-- Origin select -->
        <label for="add-artist-origin">Origin:</label>
        <select name="origin" id="add-artist-origin">
          <option value="origin" selected disabled>Artist origin</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="uk-europe">UK & Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        <!-- Members select -->
        <label for="add-type-members">Members:</label>
        <select name="members" id="add-type-members">
          <option value="members" selected disabled>The artist is...</option>
          <option value="female-lead">Female-Lead</option>
          <option value="male-lead">Male-Lead</option>
          <option value="solo">Solo Artist</option>
        </select>
        <!-- Artist image input -->
        <label for="artist-img">Artist Image (URL):</label>
        <input type="text" id="artist-img" />
        <div class="btn-container">
          <button type="button" id="add-artist-btn" class="add-btn">Add New Artist</button>
          <button type="button" id="cancel-add" class="cancel-btn">Cancel</button>
        </div>
      </form>
    `;

  const cancelBtn = document.getElementById("cancel-add");
  cancelBtn.addEventListener("click", cancelAdd);
};

addBtn.addEventListener("click", showAddForm);
