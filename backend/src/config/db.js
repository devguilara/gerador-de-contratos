require("dotenv").config()
const { Sequelize } = require('sequelize')


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl : process.env.NODE_ENV === 'production' ? {
            require: true,
            rejectUnauthorized: false
        } : false,
    }
})

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o PostgreSQL estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao PostgreSQL:", error);
  }
};

testConnection();

module.exports = sequelize;