const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/register", (req, res) => {
   userController.register(req, res);
});

router.post("/authenticate", (req, res) => {
    userController.enter(req, res);
});

module.exports = router;