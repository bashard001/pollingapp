const mongoose = require("mongoose") 
const db = require("../models") 


db.Category.updateOne({_id: '5e654a7a305c5c3c04d3809b'}, {$push:{polls: '5e654c3b571fa917c0b0fdcc'}}).then(res => console.log(res)).catch(err => console.log(err));
db.Category.updateOne({_id: '5e654a7a305c5c3c04d3809b'}, {$push:{polls: '5e654c3b571fa917c0b0fdcb'}}).then(res => console.log(res)).catch(err => console.log(err));

