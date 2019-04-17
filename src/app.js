import express from "express";
import bodyParser from "body-parser";
import router from "./customerProfile/customerProfile.routes"

import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 1234;
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/customerProfile", router);

app.listen(port, () => {
  console.log("server started at port: ", port);
});

//for testing we need to export app
module.exports = app;
