const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const { User, Contract } = require("./models");
const authRoutes = require("./routes/authRoutes");
const contractRoutes = require("./routes/contractRoutes");
const templateRoutes = require("./routes/templateRoutes");
const userRoutes = require("./routes/userRoutes")

// Inicializa o Express
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Sincroniza os modelos com o banco de dados
(async () => {
  try {
    await sequelize.sync({ force: false }); // `force: true` recria as tabelas (cuidado!)
    console.log("Modelos sincronizados com o banco de dados!");
  } catch (error) {
    console.error("Erro ao sincronizar modelos:", error);
  }
})();


// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/contracts", contractRoutes); 
app.use("/api/templates", templateRoutes);
app.use("/api/user", userRoutes );

// Rota de teste
app.get("/", (req, res) => {
  res.send("API do Gerador de Contratos está funcionando!");
});

// Middleware de erro (deve ser o último middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro no servidor" });
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});