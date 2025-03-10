const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const Template = sequelize.define(
    "Template",
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: "templates",
        timestamps: true
    }
)
module.exports = Template