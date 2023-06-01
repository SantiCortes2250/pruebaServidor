const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.port || 4000;

app.use("/api/usuarios", require("./routes/usuarios"));

app.get("/", (req, res) => {
  res.send("servidor funcionando");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
