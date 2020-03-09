const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const pollSchema = new Schema({
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
}
);

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;