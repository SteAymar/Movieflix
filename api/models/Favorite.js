const sequelize = require("../db");
const S = require("sequelize");




class Fav extends S.Model {}
  
  Fav.init(
    {
      movieId: {
        type: S.INTEGER,
        allowNull: false,
        
      },
      movieName: {
        type: S.STRING,
        allowNull: false,
      },
      movieImage: {
        type: S.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
      modelName: "favorite",
    }
  );
  
  

  
  module.exports = Fav;
  