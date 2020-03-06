import mongoose from "mongoose"
import db form "../models"

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pollingapp"
);
