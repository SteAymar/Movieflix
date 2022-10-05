const sequelize = require("../db");
const S = require("sequelize");
const bcrypt = require("bcrypt");


class User extends S.Model {

  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password) {
    return this.hash(password, this.salt)
      .then((newHash) => newHash === this.password);
  }

}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate:{
        isEmail:{
          msg:"El email debe tener un formato correcto"
        }
      }
      
    },
    password: {
      type: S.STRING,
      allowNull: false,
      
    },
    name: {
      type: S.STRING,
      allowNull: false,
      validate:{
        isAlpha:{
          msg:"El nombre solo puede contener letras."
        },
        len:{
          args:[2,255],
          msg:"Nombre debe poseer mínimo dos caracteres"
        }
      }
    },
    salt: {
      type: S.STRING,
    },
    lastname: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "user",
  }
);


User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
