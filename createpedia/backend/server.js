require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
require("./database");

const app = express();

app.use(cors());
app.use(express.json());

// SERVER FRONTEND
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/words", require("./routes/words"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
