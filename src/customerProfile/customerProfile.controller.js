import mongoose from "mongoose";
import db from "./customerProfile.model";

const CustomerProfileSchema = mongoose.model("CustomerProfileSchema");

let mongoDBController = {
  getAllData: (req, res) => {
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
  },
  editData: (req, res) => {
    // res.send("inside edit data")
    CustomerProfileSchema.findById({_id: req.params.id}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (data) {
        if (req.body.customerName) {
          data.customerName = req.body.customerName;
        }
        if (req.body.industry) {
          data.industry = req.body.industry;
        }
        if (req.body.customerId) {
          data.customerId = req.body.customerId;
        }
        if (req.body.sowNo) {
          data.sowNo = req.body.sowNo;
        }
        if (req.body.sowStartDate) {
          data.sowStartDate = req.body.sowStartDate;
        }
        if (req.body.sowEndDate) {
          data.sowEndDate = req.body.sowEndDate;
        }
        if (req.body.spocEmail) {
          data.spocEmail = req.body.spocEmail;
        }
        if (req.body.isActive) {
          data.isActive = req.body.isActive;
        }
        data.save((err, obj) => {
          if (err) {
            res.status(500).send();
          }
          if (obj) {
            res.status(200).send(obj);
          } else {
            res.status(404).send();
          }
        });

      } else {
        res.status(404).send({"message": "Data not available"});
      }
    });
  }
}

module.exports = mongoDBController;
