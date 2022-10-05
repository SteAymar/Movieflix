const express = require("express");
const { User, Fav } = require("../models");
const router = express.Router();

router.post("/", (req, res, next) => {
  const { id, movieId, movieName, movieImage } = req.body;
  Fav.findOne({ where: { movieId: movieId } }).then((favs) => {
    if (favs) {
    res.status(200)
    const error = {ok:false, errorMessage: "Ya fue agregada a favoritos"}
    res.send(error)
    } else {
      User.findOrCreate({ where: { id: id } }).then((result) => {
        const user = result[0];
        Fav.create({ movieId, movieName, movieImage }).then((newFav) => {
          newFav.setOwner(user);
          const success = {newFav:newFav, ok:true}
          res.send(success);
        });
      });
    }
  });
});

router.get("/", (req, res, next) => {
  const id  = req.headers.id
  Fav.findAll({ where: { OwnerId: id } }).then((favs) => res.send(favs));
});

router.delete("/", (req, res, next) => {
    const id  = req.headers.idfav
    Fav.destroy({ where: { id: id } }).then((favs) => res.sendStatus(200));
  });


module.exports = router;
