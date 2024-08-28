const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const {
  addTask,
  editTask,
  getTask,
  deleteTask,
} = require("./controllers/todos");

const dbConnect = require("./db/dbConnect");
dotEnv.config();
dbConnect();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Api is working" });
});

app.get("/todo", getTask);
app.post("/todo", addTask);
app.put("/todo", editTask);
app.delete("/todo", deleteTask);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
