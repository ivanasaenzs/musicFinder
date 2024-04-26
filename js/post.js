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
