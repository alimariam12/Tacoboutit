const { raw } = require("mysql");

module.exports = function(sequelize, DataTypes) {
  let Review = sequelize.define("Review", {
    // user: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      raw:true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      },
      raw: true
    },
    // category: {
    //   type: DataTypes.STRING,
    //   defaultValue: "Personal"
    // }
  });
  return Review;
};
