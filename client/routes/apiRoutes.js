//created by Mathi not using it

const router = require("express").Router();
const db = require("../models");

router.get("/news:id", (req, res) => {
  console.log("news route##############################");
  // connect 
  db.News.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(news => res.json(news))
    .catch(err => res.status(422).end());
});

module.exports = router;
