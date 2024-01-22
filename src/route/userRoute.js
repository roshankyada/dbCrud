const express = require("express");
const UserController = require("../controllers/UserController");
router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", UserController.getAll);
// router.put("/update/:id", BottController.update);

module.exports = router;
