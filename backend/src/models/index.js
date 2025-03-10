const User = require("./User")
const Contract = require("./Contract")

User.hasMany(Contract, {foreingKey: "userId"})
Contract.belongsTo(User, {foreingKey: "userId"})    

module.exports = { User, Contract }