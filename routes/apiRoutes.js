const router = require("express").Router();
const pollsController = require("../controllers/pollController")
const db = require("../models")

router.get("/polls/:category", (req, res) => {
  console.log('route hit')
  console.log(req.params)
  let { category } =req.params
  console.log(category)
  
db.Categories.find(req.params)
.then(category => {
  console.log(category[0].polls)
  return res.json(category[0]);
  
}).catch(err => {
  console.log('Error occured')
  console.log(err);
});
});

router.post("/vote", (req, res) => {
  console.log("my git")
  console.log( req.body.body[0].voteid)
  var vote = req.body.body[0].voteid
  // db.Polls.findOne({category: "science","id": req.body.body[1].queid})
  // .then(choice => {
  //   console.log("return lol" + choice)
   
  //   return res.json(choice);
   
    
  // }).catch(err => {
  //   console.log('Error occured')
  //   console.log(err);
  // });
  
   console.log(vote)

   if ( vote == "votetwo"){
  
   db.Polls.findOneAndUpdate({category: "science","id": req.body.body[1].queid}, { $inc: {votetwo: 1}}, {new: true },function(err, response) {
    if (err) {
    console.log(err);
   } else {
    console.log(response);
   } 
   
  });
} else {
  db.Polls.findOneAndUpdate({category: "science","id": req.body.body[1].queid}, { $inc: {voteone: 1}}, {new: true },function(err, response) {
    if (err) {
    console.log(err);
   } else {
    console.log(response);
   } 
   
  });

}
})

module.exports = router;
