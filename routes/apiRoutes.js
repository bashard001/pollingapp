const router = require("express").Router();
const pollsController = require("../controllers/pollController")
const db = require("../models")

router.get("/polls/:category", (req, res) => {
  console.log('route hit')
  
db.Categories.find(req.params)
.then(category => {
  
  return res.json(category[0]);
  
}).catch(err => {
  console.log('Error occured')
  console.log(err);
});
});

module.exports = router;
