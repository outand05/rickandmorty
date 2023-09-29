let myFavorites = [];

function postFav(req, res) {
  try {
    const newFavorite = req.body;

    myFavorites.push(newFavorite);

    res.status(201).json(myFavorites);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el favorito" });
  }
}

function deleteFav(req, res) {
  try {
    const idToDelete = req.params.id;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== idToDelete);

    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el favorito" });
  }
}

module.exports = {
  postFav,
  deleteFav,
};
