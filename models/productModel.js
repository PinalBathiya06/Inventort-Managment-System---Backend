module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define("product",{
        description : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        qty : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        price : {
            type : DataTypes.FLOAT,
            allowNull : false
        }
    })
    return Product
}