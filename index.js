const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./src/model");
const route = require("./src/route/index");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Congratulation API is Working now!!");
});
app.use("/api", route);

db.sequelize.sync({ alter: true });
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
