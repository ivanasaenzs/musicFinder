// Search by filter
let mainFilter = "";
let userPickedFilter = "";

// Event listener to handle filter selection change (render/hide)
$("#search-filters").addEventListener("change", () => {
  console.log("Search filters clicked");
  mainFilter = $("#search-filters").value;
  console.log(mainFilter);

  $("#search-genre").classList.add("hidden");
  $("#search-active-since").classList.add("hidden");
  $("#origin-search").classList.add("hidden");
  $("#search-members").classList.add("hidden");

  if (mainFilter === "genre") {
    $("#search-genre").classList.remove("hidden");
  } else if (mainFilter === "formation-period") {
    $("#search-active-since").classList.remove("hidden");
  } else if (mainFilter === "country") {
    $("#origin-search").classList.remove("hidden");
  } else if (mainFilter === "members") {
    $("#search-members").classList.remove("hidden");
  }
});

// Event listener to handle search button click and filter
$(".search-btn").addEventListener("click", () => {
  const filterUrl = new URLSearchParams(baseUrl.search);

  // Depending on the selected mainFilter, create the fetchUrl with userPickedFilter
  const mainFilter = $("#search-filters").value;
  if (mainFilter === "genre") {
    const genre = $("#search-genre").value;
    if (genre !== "searchby-genre") {
      filterUrl.set("genre", genre);
    }
  } else if (mainFilter === "formation-period") {
    const activeSince = $("#search-active-since").value;
    filterUrl.set("activeSince", activeSince);
  } else if (mainFilter === "country") {
    const origin = $("#origin-search").value;
    filterUrl.set("origin", origin);
  } else if (mainFilter === "members") {
    const members = $("#search-members").value;
    filterUrl.set("members", members);
  }

  $("#all-cards").innerHTML = "";
  getArtists(`${baseUrl}/?${filterUrl}`);
});

$(".clear-btn").addEventListener("click", () => {
  // Reset select elements to default and add hidden class
  $("#search-filters").value = "search-by";
  $("#search-genre").value = "searchby-genre";
  $("#search-active-since").value = "active-since";
  $("#origin-search").value = "searchby-origin";
  $("#search-members").value = "searchby-members";

  $("#search-genre").classList.add("hidden");
  $("#search-active-since").classList.add("hidden");
  $("#origin-search").classList.add("hidden");
  $("#search-members").classList.add("hidden");

  $("#all-cards").innerHTML = "";
  getArtists(baseUrl);
});
