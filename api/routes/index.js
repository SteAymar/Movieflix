const express = require("express");
const router = express.Router();
const movies = require("./movies");
const users = require ("./users")
const fav= require("./fav")
const AuthController = require("../controllers/AuthController")



router.use("/movies", movies)
router.use("/users", users)
router.use("/fav", fav)

router.post("/register", AuthController.register);
router.post("/login", AuthController.login, );
 



router.post("users/logout",(req,res)=>{
    res.clearCookie("token")
    res.sendStatus(204)
})

module.exports = router;