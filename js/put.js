const showEditForm = () => {
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
  fetch(`${baseUrl}/${artistId}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};
