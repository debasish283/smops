import mongoose from "mongoose";
import db from "../model/customerModel";
const CustomerProfileSchema = mongoose.model("CustomerProfileSchema");

let mongoDBController = {
  getAllData: (req, res) => {
    // res.send("hi thereee")
    CustomerProfileSchema.find({}, (err, data) => {
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
    let customer_config = new CustomerProfileSchema({
        customerName: req.body.customerName,
        industry: req.body.industry,
        customerId: req.body.customerId,
        sowNo: req.body.sowNo,
        sowStartDate: req.body.sowStartDate,
        sowEndDate: req.body.sowEndDate,
        spocEmail: req.body.spocEmail,
        isActive: req.body.isActive
    });
    customer_config.save((err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    })
  },
  getDataById: (req, res) => {
    CustomerProfileSchema.findById({_id: req.params.id}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    });
  }
}

export default mongoDBController;
