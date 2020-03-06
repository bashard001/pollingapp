// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the news collection and inserts the news below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
// );

// const newsSeed = [
// ];

// db.News.remove({})
//   .then(() => db.News.collection.insertMany(newsSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
