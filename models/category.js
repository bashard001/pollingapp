const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category: { type: String, required: true },
    polls: [{
    
        title: { type: String, required: true },
        _id: { type: String },
        optionone: 
            {option: {type: String, required: true},
            votes: {type: Number}
         },
        optiontwo: 
            {option: {type: String, required: true},
            votes: {type: Number}
         }
        
    

}]
}
);



const Categories = mongoose.model("categories", categorySchema);

module.exports = Categories;