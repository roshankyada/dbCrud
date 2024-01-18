const express = require("express");
const UserController = require("../controllers/UserController");
router = express.Router();

router.post("/create", UserController.create);
router.get("/", UserController.getAll);
// router.put("/update/:id", BottController.update);

module.exports = router;
