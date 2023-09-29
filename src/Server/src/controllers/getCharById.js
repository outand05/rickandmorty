const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/";
const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(url + id)
    .then((response) => response.data)
    .then(
      (data) => {
        const character = {
          id: data.id,
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
          origin: data.origin,
          status: data.status,
        };
        res.status(200).json(character);
      },
      (error) => res.status(500).json(error.messege)
    );
};
module.exports = getCharById;
