// PUT METHOD
const editArtist = (artistId) => {
  fetch(`${baseUrl}/${artistId}`, {
    method: "PUT",
  });
};
