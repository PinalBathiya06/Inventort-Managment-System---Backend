const { Model } = require("sequelize")
const { Sequelize } = require('sequelize');
const userModel = require("./userModel")

module.exports = (sequelize,DataTypes) =>{
    const Invoice = sequelize.define("invoice",{
        user_id : {
            type : Sequelize.INTEGER,
            allowNull : true,
        },
        // product_id : {
        //     type : DataTypes.INTEGER,
        //     allowNull : false
        // },
        client_details : {
            type : DataTypes.JSON,
            allowNull : true
        },
        invoice_dt : {
            type : DataTypes.DATE,
            allowNull : true
        },
        item_details : {
            type : DataTypes.JSON,
            allowNull : true
        },
        total : {
            type : DataTypes.FLOAT,
            allowNull : true
        }
    })
    return Invoice
}