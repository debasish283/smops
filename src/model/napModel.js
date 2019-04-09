import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("connection succeeded for NAP models");
});

let Schema = mongoose.Schema;

let nap_input = new Schema(
  {
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true }
  },
  { strict: false }
);
mongoose.model("nap_input", nap_input);
