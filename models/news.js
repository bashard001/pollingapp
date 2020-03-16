const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new mongoose.Schema({
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

const News = mongoose.model("News", newsSchema);

module.exports = News;
