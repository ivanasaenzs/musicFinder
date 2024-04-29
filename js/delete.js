// DELETE
const deleteArtist = (artistId) => {
  fetch(`${baseUrl}/${artistId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => getArtists(data))
    .catch((err) => console.error(err));
};

$("#all-cards").innerHTML += `

`;
