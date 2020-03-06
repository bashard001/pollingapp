const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // url for news web page - unique index
  href: {
    type: String,
    default: "",
    unique: true
  },

});

const News = mongoose.model("Recipe", newsSchema);

module.exports = News;
