const { User } = require("../models/");
const bcrypt = require("bcrypt");
const {generateToken} = require("../config/token")


module.exports = {

  register(req, res) {
 const { email, password, name, lastname } = req.body;
    User.create(req.body)
      .then((user) => res.send(user))
  },


  login(req, res) {
    const { email, password } = req.body;
    User.findOne({
      where: { email },
    }).then((user) => {
      if (!user) return res.sendStatus(401);
      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401);
        const payload = {
          id: user.id,
          email: user.email,
          name: user.name,
          lastname: user.lastname,
        };
        const token = generateToken(payload);
        res.status(200).json({payload,token})
      });
    });
  },


};
