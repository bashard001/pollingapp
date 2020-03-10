const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category: { type: String, required: true },
    polls: [{
        title: { type: String, required: true },
        optionone: [
            {option: {type: String, required: true},
            votes: {type: Number}
         }],
        optiontwo: [
            {option: {type: String, required: true},
            votes: {type: Number}
         }],
        date: { type: Date, default: Date.now },
        category: {type: mongoose.ObjectId}
    }]
}
);

const Categories = mongoose.model("categories", categorySchema);

module.exports = Categories;