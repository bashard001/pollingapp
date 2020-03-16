const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const pollsSchema = new Schema({
    category: { type: String, required: true },
    
    
        title: { type: String, required: true },
        id: { type: String },
        optionone: {type: String, required: true},
            voteone: {type: Number},
        
        optiontwo: {type: String, required: true},
            votetwo: {type: Number}
         
        
    


}
);



const Polls = mongoose.model("poll", pollsSchema);

module.exports = Polls;