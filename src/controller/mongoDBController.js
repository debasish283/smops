import mongoose from "mongoose";
import db from "../model/napModel";
const nap_input = mongoose.model("nap_input");

let mongoDBController = {
  getAllData: (req, res) => {
    // res.send("hi thereee")
    nap_input.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    });
  },
  insertData: (req, res) => {
    let nap_config = new nap_input({
      name: req.body.name,
      price: req.body.price
    });
    nap_config.save((err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    })
  }
}

export default mongoDBController;
