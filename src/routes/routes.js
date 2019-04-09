const router = require("express").Router();
const mongoDBController = require("../controller");

router.get("/getAll", mongoDBController.mongoDBController.getAllData)
router.post("/create", mongoDBController.mongoDBController.insertData)

module.exports = router;
