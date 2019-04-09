import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes";

import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/product", router);

app.listen(port, () => {
  console.log("server started at port: ", port);
});

//for testing we need to export app
module.exports = app;
