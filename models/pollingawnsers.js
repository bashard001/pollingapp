const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    title: { type: String, required: true },
    optionone: { type: Number, required: true },
    optiontwo: { type: Number, required: true},
    date: { type: Date, default: Date.now }
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;