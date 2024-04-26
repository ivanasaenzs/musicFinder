// Handle spinner
const renderSpinner = () => {
  $("#spinner-container").classList.remove("hidden");
};

const hideSpinner = () => {
  $("#spinner-container").classList.add("hidden");
};

// Cancel add operation
const cancelAdd = () => {
  $("#add-artist-form").classList.add("hidden");

  renderSpinner();

  setTimeout(() => {
    hideSpinner();
    $("#all-cards").classList.remove("hidden");
  }, 2000);
};

// Show the add form
const showAddForm = () => {
  $("#all-cards").classList.add("hidden");
  $("#add-artist-form").classList.remove("hidden");
};

$("#cancel-add").addEventListener("click", cancelAdd);
$("#add-btn-nav").addEventListener("click", showAddForm);

// POST METHOD
$("#add-artist-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const newArtist = {
    name: $("#artist-name").value,
    biography: $("#add-biography").value,
    genre: $("#add-genre").value,
    origin: $("#add-artist-origin").value,
    members: $("#add-type-members").value,
    image: $("#artist-img").value,
  };

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newArtist),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        $("#add-artist-form").reset();
        $("#add-artist-form").classList.add("hidden");
        $("#all-cards").classList.remove("hidden");
        getArtist(baseUrl);
      } else {
        alert("Oops! An error has occurred");
      }
    })
    .catch((err) => alert(err));
  console.log(newArtist);
});
