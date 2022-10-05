

const Fav = require("./Favorite");
const User = require("./User");


Fav.belongsTo(User,{as: "Owner"})


module.exports = { User, Fav };
