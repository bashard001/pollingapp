const mongoose = require("mongoose")
const db = require("../models")

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pollingapp"
);

let pollsSeed = [
  {
    title: "Do you prefer a PC or a MAC",
    optionone: [
      {
        option: "PC",
        votes: 1
      }
    ],
    optiontwo: [
        {
            option:"MAV",
            votes: 1
        }
    ],
    category: mongoose.Types.ObjectId("5e654a7a305c5c3c04d3809b")
  },
  {
    title: "Do you prefer a IOS or a ANDROID",
    optionone: [
      {
        option: "IOS",
        votes: 1
      }
    ],
    optiontwo: [
        {
            option:"ANDROID",
            votes: 1
        }
    ],
    category: mongoose.Types.ObjectId("5e654a7a305c5c3c04d3809b")
  },
  {
    title: "Do you prefer a Big or Small phones",
    optionone: [
      {
        option: "BIG",
        votes: 1
      }
    ],
    optiontwo: [
        {
            option:"Small",
            votes: 1
        }
    ]
  },
  {
    title: "Do you prefer a hybrid laptops or regular laptops",
    optionone: [
      {
        option: "regular laptops",
        votes: 1
      }
    ],
    optiontwo: [
        {
            option:"hybrid laptops",
            votes: 1
        }
    ]
  },
  {
    title: "Do you prefer ATT or T-mobile",
    optionone: [
      {
        option: "ATT",
        votes: 1
      }
    ],
    optiontwo: [
        {
            option:"T-mobile",
            votes: 1
        }
    ]
  }
];

db.Poll.deleteMany({})
  .then(() => db.Poll.collection.insertMany(pollsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });