'use strict';

module.exports = function(sequelize, DataTypes){

  var Hw = sequelize.define('Hw',{
      country: DataTypes.STRING,
      US_drone_strikes: DataTypes.STRING,
      civilian_reported_killed: DataTypes.STRING,
      children_reported_killed: DataTypes.STRING
      });

  return Hw;

};
