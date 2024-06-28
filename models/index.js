const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    'invoicer',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch(err=>{

    console.log('Error : '+err)
})

const db ={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.users = require("./userModel.js")(sequelize,DataTypes)
db.products = require("./productModel.js")(sequelize, DataTypes)
db.invoices = require("./invoiceModel.js")(sequelize, DataTypes)

db.users.hasMany(db.invoices,{
    foreignKey : 'user_id',
    as : 'invoice'
})
db.invoices.belongsTo(db.users,{
    foreignKey : 'user_id',
    as : 'user'
})

db.products.hasMany(db.invoices,{
    foreignKey : 'product_id',
    as : 'invoice'
})
db.invoices.belongsTo(db.products,{
    foreignKey : 'product_id',
    as : 'product'
})

db.sequelize.sync({ force:false})
.then(()=>{
    console.log("sync is done")
})

module.exports = db