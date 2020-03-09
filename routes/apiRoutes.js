const router = require("express").Router();
const Poll = require("../models/pollingawnsers");

router.get("/api/polls", (req, res) => {
  // Use a reguaplar expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  Poll.update({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});

module.exports = router;
