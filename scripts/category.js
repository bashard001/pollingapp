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
            optionone: [
                {
                    option: "Round",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "Flat",
                    votes: 1
                }
            ]
        },
        {
            title: "Is pluto a planet?",
            optionone: [
                {
                    option: "IOS",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "ANDROID",
                    votes: 1
                }
            ]
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
                    option: "Small",
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
                    option: "hybrid laptops",
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
                    option: "T-mobile",
                    votes: 1
                }
            ]}]
    },
    {
        category: "politics",
        polls: [{
            title: "Do you prefer a PC or a MAC",
            optionone: [
                {
                    option: "PC",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "MAV",
                    votes: 1
                }
            ]
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
                    option: "ANDROID",
                    votes: 1
                }
            ]
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
                    option: "Small",
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
                    option: "hybrid laptops",
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
                    option: "T-mobile",
                    votes: 1
                }
            ]}]
    },
    {
        category: "sports",
        polls: [{
            title: "Do you prefer watching basketball or football?",
            optionone: [
                {
                    option: "Basketball",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "Football",
                    votes: 1
                }
            ]
        },
        {
            title: "Are you a Roger Federez or Ratael Nadal fan?",
            optionone: [
                {
                    option: "Roger",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "Ratael",
                    votes: 1
                }
            ]
        },
        {
            title: "Do you watch soccer?",
            optionone: [
                {
                    option: "Yes",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "No",
                    votes: 1
                }
            ]
        },
        {
            title: "Do you like baseball?",
            optionone: [
                {
                    option: "Yes",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "No",
                    votes: 1
                }
            ]
        },
        {
            title: "do you watch the olympics?",
            optionone: [
                {
                    option: "Yes",
                    votes: 1
                }
            ],
            optiontwo: [
                {
                    option: "No",
                    votes: 1
                }
            ]
        }]
    },
    {
        category: "entertainmet",
        polls: [{

            title: "Do you prefer comedy or horror movies?",

            optionone: [{
                option: "comedy",
                votes: 1
            }],
            optiontwo: [{
                option: "horror",
                votes: 1
            }]
        },
        {

            title: "Are you goig to watch the new mission impassible movie?",

            optionone: [{
                option: "Yes",
                votes: 1
            }],
            optiontwo:[{
                option: "No",
                votes: 1 
            }]
        },
            {

                title: "Do you like hiphop?",

                optionone: [{
                    option: "Yes",
                    votes: 1
                }],
                optiontwo: [{
                    option: "No",
                    votes: 1

                }]
            },
            {

                title: "Do you like baseball?",

                optionone: [{
                    option: "Yes",
                    votes: 1
                }],
                optiontwo: [{
                    option: "No",
                    votes: 1
                }]
            },
            {

                title: "do you prefer running or hiking?",

                optionone: [{
                    option: "running",
                    votes: 1
                }],
                optiontwo: [{
                    option: "hiking",
                    votes: 1
                }]
            }]},
            {
                category: "tech",
                polls: [{
                    title: "Do you prefer a PC or a MAC",
                    optionone: [
                        {
                            option: "PC",
                            votes: 1
                        }
                    ],
                    optiontwo: [
                        {
                            option: "MAV",
                            votes: 1
                        }
                    ]
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
                            option: "ANDROID",
                            votes: 1
                        }
                    ]
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
                            option: "Small",
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
                            option: "hybrid laptops",
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
                            option: "T-mobile",
                            votes: 1
                        }
                    ]}
                
                ]
            }];




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