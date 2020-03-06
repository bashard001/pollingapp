import mongoose from "mongoose"
import db from "..models/"

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pollingapp"
);
