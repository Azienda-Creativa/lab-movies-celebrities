const router = require("express").Router()

// all routes
const Celebrity = require("../models/Celebrity.model")

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebritiesDB) => {
      console.log("Find celebrities works")
      res.render("celebrities/celebrities", { celebritiesDB })
    })
    .catch((err) => {
      console.log(err)
    })
})
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  Celebrity.create({ name, occupation, catchPhrase })
    .then((newCelebrity) => {
      res.render("celebrities/celebrities")
    })
    .catch((err) => {
      console.log(err + "redirect to new-celebrity")
      res.redirect("celebrities/new-celebrity")
    })
})

module.exports = router
