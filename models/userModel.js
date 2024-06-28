module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define("user",{
        name : {
            type : DataTypes.STRING,
            allowNull : true
        },
        address : {
            type : DataTypes.TEXT,
            allowNull : true
        },
        email : {
            type : DataTypes.STRING,
            allowNull : true
        },
        contact : {
            type : DataTypes.STRING,
            allowNull : true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        normal_password: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    })
    return User
}