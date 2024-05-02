// Search by filter
const searchFilters = document.getElementById("search-filters");
const genreFilter = document.getElementById("search-genre");
const activeSinceFilter = document.getElementById("search-active-since");
const originFilter = document.getElementById("origin-search");
const membersFilter = document.getElementById("search-members");
let mainFilter = "";

searchFilters.addEventListener("change", () => {
  console.log("Search filters clicked");
  mainFilter = searchFilters.value;
  console.log(mainFilter);

  genreFilter.classList.add("hidden");
  activeSinceFilter.classList.add("hidden");
  originFilter.classList.add("hidden");
  membersFilter.classList.add("hidden");

  if (mainFilter === "genre") {
    genreFilter.classList.remove("hidden");
  } else if (mainFilter === "formation-period") {
    activeSinceFilter.classList.remove("hidden");
  } else if (mainFilter === "country") {
    originFilter.classList.remove("hidden");
  } else if (mainFilter === "members") {
    membersFilter.classList.remove("hidden");
  }
});
