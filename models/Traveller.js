const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
   }
},{
    sequelize
});

module.exports=Traveller