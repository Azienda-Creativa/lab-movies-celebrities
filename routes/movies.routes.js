const router = require("express").Router()
const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesDB) => {
      const movies = [...moviesDB]
      console.log("Find movies works")
      res.render("movies/movies", { movies })
      // console.log(`${moviesDB}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get("/movies/create", (req, res, next) => {
  console.log(`also this works well`)
  res.render("movies/new-movie")
})

router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body
  Movie.create({ title, genre, plot, cast })
    .then((newMovie) => {
      res.redirect("/movies")
    })
    .catch((err) => {
      console.log(err + "redirect to new-movie")
      res.redirect("/movies/new-movie")
    })
})

module.exports = router
