const mongoose = require("mongoose")
const db = require("../models")

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/pollingapp"
);

let category = [

    {
        category: "science",
        polls: [{
            title: "Do you believe the earth is round or flat?",
        _id: "q1",
            optionone: 
                {
                    option: "Round",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "Flat",
                    votes: 1
                }
            
        },
        {
            title: "Is pluto a planet?",
            _id: "q2",
            optionone: 
                {
                    option: "IOS",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "ANDROID",
                    votes: 1
                }
            
        },
        {
            title: "Do you prefer a Big or Small phones",
            _id: "q3",
            optionone: 
                {
                    option: "BIG",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "Small",
                    votes: 1
                }
            
        },
        {
            title: "Do you prefer a hybrid laptops or regular laptops",
            _id: "q4",
            optionone: 
                {
                    option: "regular laptops",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "hybrid laptops",
                    votes: 1
                }
            
        },
        {
            title: "Do you prefer ATT or T-mobile",
            _id: "q5",
            optionone: 
                {
                    option: "ATT",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "T-mobile",
                    votes: 1
                }
            }]
    },
    {
        category: "politics",
        polls: [{
            title: "Do you prefer a PC or a MAC",
            _id: "q1",
            optionone: 
                {
                    option: "PC",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "MAV",
                    votes: 1
                }
            
        },
        {
            title: "Do you prefer a IOS or a ANDROID",
            _id: "q2",
            optionone: 
                {
                    option: "IOS",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "ANDROID",
                    votes: 1
                }
            
        },
        {
            title: "Do you prefer a Big or Small phones",
            _id: "q3",
            optionone: 
                {
                    option: "BIG",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "Small",
                    votes: 1
                }
            
        },
        {
            title: "Do you prefer a hybrid laptops or regular laptops",
            _id: "q4",
            optionone: 
                {
                    option: "regular laptops",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "hybrid laptops",
                    votes: 1
                }
            
        },
        {
            title: "Do you prefer ATT or T-mobile",
            _id: "q5",
            optionone: 
                {
                    option: "ATT",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "T-mobile",
                    votes: 1
                }
            }]
    },
    {
        category: "sports",
        polls: [{
            title: "Do you prefer watching basketball or football?",
            _id: "q1",
            optionone: 
                {
                    option: "Basketball",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "Football",
                    votes: 1
                }
            
        },
        {
            title: "Are you a Roger Federez or Ratael Nadal fan?",
            _id: "q2",
            optionone: 
                {
                    option: "Roger",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "Ratael",
                    votes: 1
                }
            
        },
        {
            title: "Do you watch soccer?",
            _id: "q3",
            optionone: 
                {
                    option: "Yes",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "No",
                    votes: 1
                }
            
        },
        {
            title: "Do you like baseball?",
            _id: "q4",
            optionone: 
                {
                    option: "Yes",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "No",
                    votes: 1
                }
            
        },
        {
            title: "do you watch the olympics?",
            _id: "q5",
            optionone: 
                {
                    option: "Yes",
                    votes: 1
                }
            ,
            optiontwo: 
                {
                    option: "No",
                    votes: 1
                }
            
        }]
    },
    {
        category: "entertainment",
        polls: [{

            title: "Do you prefer comedy or horror movies?",
            _id: "q2",

            optionone: {
                option: "comedy",
                votes: 1
            },
            optiontwo: {
                option: "horror",
                votes: 1
            }
        },
        {

            title: "Are you goig to watch the new mission impassible movie?",
            _id: "q2",

            optionone: {
                option: "Yes",
                votes: 1
            },
            optiontwo:{
                option: "No",
                votes: 1 
            }
        },
            {

                title: "Do you like hiphop?",
                _id: "q2",

                optionone: {
                    option: "Yes",
                    votes: 1
                },
                optiontwo: {
                    option: "No",
                    votes: 1

                }
            },
            {

                title: "Do you like baseball?",
                _id: "q2",
                optionone: {
                    option: "Yes",
                    votes: 1
                },
                optiontwo: {
                    option: "No",
                    votes: 1
                }
            },
            {

                title: "do you prefer running or hiking?",
                _id: "q2",

                optionone: {
                    option: "running",
                    votes: 1
                },
                optiontwo: {
                    option: "hiking",
                    votes: 1
                }
            }]},
            {
                category: "technology",
                polls: [{
                    title: "Do you prefer a PC or a MAC",
                    _id: "q1",
                    optionone: 
                        {
                            option: "PC",
                            votes: 1
                        }
                    ,
                    optiontwo: 
                        {
                            option: "MAV",
                            votes: 1
                        }
                    
                },
                {
                    title: "Do you prefer a IOS or a ANDROID",
                    _id: "q2",
                    optionone: 
                        {
                            option: "IOS",
                            votes: 1
                        }
                    ,
                    optiontwo: 
                        {
                            option: "ANDROID",
                            votes: 1
                        }
                    
                },
                {
                    title: "Do you prefer a Big or Small phones",
                    _id: "q3",
                    optionone: 
                        {
                            option: "BIG",
                            votes: 1
                        }
                    ,
                    optiontwo: 
                        {
                            option: "Small",
                            votes: 1
                        }
                    
                },
                {
                    title: "Do you prefer a hybrid laptops or regular laptops",
                    _id: "q4",
                    optionone: 
                        {
                            option: "regular laptops",
                            votes: 1
                        }
                    ,
                    optiontwo: 
                        {
                            option: "hybrid laptops",
                            votes: 1
                        }
                    
                },
                {
                    title: "Do you prefer ATT or T-mobile",
                    _id: "q5",
                    optionone: 
                        {
                            option: "ATT",
                            votes: 1
                        }
                    ,
                    optiontwo: 
                        {
                            option: "T-mobile",
                            votes: 1
                        }
                    }
                
                ]
            }];

            let sciencePoll =[{
                category: "science",
                id: "q1",
                voteone: 1,
                votetwo: 2,

                title: "Do you believe the earth is round or flat?",
                optionone:
                    "Round",
            
                optiontwo:
                    "Flat",
            
            
            },
            {
                category: "science",
                id: "q2",
                voteone: 1,
                votetwo: 1,
                title: "Is pluto a planet?",
            
                optionone:
                    "IOS",
            
                optiontwo:
                    "ANDROID",
            
            
            },
            {
                category: "science",
                id: "q3",
                voteone: 1,
                votetwo: 1,
                title: "Do you prefer a Big or Small phones",
            
                optionone:
                    "BIG",
            
                optiontwo:
                    "Small",
            
            
            },
            {
                category: "science",
                id: "q4",
                voteone: 1,
                votetwo: 1,
                title: "Do you prefer a hybrid laptops or regular laptops",
            
                optionone:
                    "regular laptops",
            
                optiontwo:
                    "hybrid laptops",
            
            
            },
            {
                category: "science",
                id: "q5",
                voteone: 1,
                votetwo: 1,
                title: "Do you prefer ATT or T-mobile",
            
                optionone:
                    "ATT",
            
                optiontwo:
                    "T-mobile",
            }
            ]



         

            db.Categories.deleteMany({})
                .then(() => db.Categories.collection.insertMany(category))
                .then(data => {
                    console.log(data.result.n + " records inserted!");
                    process.exit(0);
                })
                .catch(err => {
                    console.error(err);
                    process.exit(1);
                });
            
            
            db.Polls.deleteMany({})
                .then(() => db.Polls.create(sciencePoll))
                .then(data => {
                             console.log(data.result.n + " records inserted!");
                             process.exit(0);
                         }
                )
