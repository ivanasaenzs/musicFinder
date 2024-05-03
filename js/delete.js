// DELETE
const deleteArtist = (artistId) => {
  fetch(`${baseUrl}/${artistId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        backToHomepage();
      }
    })
    .catch((err) => {
      console.error("Error deleting artist:", err);
    });
};

// Function to assign event to the 'Delete' button
const assignEventToDeleteButton = (artistId) => {
  $(".delete-btn").addEventListener("click", (e) => {
    showDeleteModal(artistId);
  });
};

const showDeleteModal = (artistId) => {
  if ($(".delete-modal-container")) {
    $(".delete-modal-container").classList.remove("hidden");
    // Update the data-cardid attribute of the confirm-delete button
    $(".confirm-delete").dataset.cardid = artistId;
  }
};

// Event listener for cancel button inside the modal
$(".confirm-cancel").addEventListener("click", () => {
  $(".delete-modal-container").classList.add("hidden");
});

// Event listener for confirm delete button inside the modal
$(".confirm-delete").addEventListener("click", (e) => {
  $(".delete-modal-container").classList.add("hidden");
  deleteArtist(e.currentTarget.dataset.cardid);
});
