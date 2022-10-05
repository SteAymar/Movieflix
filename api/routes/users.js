const express = require("express");
const router = express.Router();
const {validateUser} = require("../middleware/auth");



router.get("/me", validateUser, (req, res) => {
    res.send(req.user);
  });
  


module.exports = router

