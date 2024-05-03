// Render edit form
const renderEditForm = () => {
  $("#individual-card-container").classList.add("hidden");
  $("#edit-artist-form").classList.remove("hidden");
};

$("#cancel-edit-btn").addEventListener("click", (e) => {
  console.log("cancel operation button clicked!!");
  e.preventDefault();
  cancelOperation();
});

// PUT METHOD
const editArtist = (artistId) => {
  const updatedArtist = {
    name: $("#edit-artist-name").value,
    activeSince: $("#edit-active-since").value,
    biography: $("#edit-biography").value,
    genre: $("#edit-genre").value,
    origin: $("#edit-artist-origin").value,
    members: $("#edit-type-members").value,
    image: $("#edit-artist-img").value,
  };

  fetch(`${baseUrl}/${artistId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedArtist),
  })
    .then((res) => {
      if (res.ok) {
        $("#edit-artist-form").classList.add("hidden");
        $("#individual-card-container").classList.remove("hidden");
        $("#individual-card-container").innerHTML = "";
        renderDetails(updatedArtist);
      }
    })
    .catch((err) => console.log(err));
  console.log(updatedArtist);
};

// Attach event listener to the edit button
$("#edit-artist-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    "Editing artist with ID:",
    $(".edit-btn").getAttribute("data-cardid")
  );
  editArtist($(".edit-btn").getAttribute("data-cardid"));
});
