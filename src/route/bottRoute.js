const express = require("express");
const BottController = require("../controllers/BottController");
router = express.Router();

router.post("/create", BottController.create);
router.get("/", BottController.getAll);
router.put("/update/:id", BottController.update);

module.exports = router;
