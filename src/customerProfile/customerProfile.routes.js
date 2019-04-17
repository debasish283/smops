import mongoDBController from "./customerProfile.controller"
const router = require("express").Router();

router.get("/getAll", mongoDBController.getAllData)
router.get("/getDataById/:id", mongoDBController.getDataById)
router.put("/editData/:id", mongoDBController.editData)
router.post("/create", mongoDBController.insertData)

module.exports = router;
