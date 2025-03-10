const {DataTypes} = require("sequelize")
const sequelize = require("../config/db");


const Contract = sequelize.define(
    "contract",
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content : {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userId : {
            type: DataTypes.INTEGER,
           allowNull: false
        }
    },
    {
        tableName: "contracts",
        timestamps: true
    }
)

module.exports = Contract;