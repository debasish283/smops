import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(callback) {
//   console.log("connection succeeded for NAP models");
// });

let Schema = mongoose.Schema;

let CustomerProfileSchema = new Schema({
    customerName: {type: String, required: true},
    industry: {type: String, required: true},
    customerId: {type: Number, required: true},
    sowNo: {type: Number, required: true},
    sowStartDate: {type: Date, required: true},
    sowEndDate: {type: Date, required: true},
    spocEmail: {type: String, required: true},
    isActive: {type: Boolean, required: true}
});

mongoose.model("CustomerProfileSchema", CustomerProfileSchema);
