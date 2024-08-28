const Todo = require("../db/models");

const getTask = async (req, res) => {
  try {
    const result = await Todo.find();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(200).json({ message: "error occured" });
  }
};

const addTask = async (req, res) => {
  const result = await Todo.findOne({ title: "" });
  if (result) {
    return res.status(404).json({ message: "First edit existing new task" });
  }
  await Todo.create({ title: "", description: "" })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ message: "error" }));
};

const editTask = async (req, res) => {
  try {
    const { _id, title, description } = req.body;
    const result = await Todo.findById(_id);
    if (!result) {
      return res.status(404).json({ message: "Doesn't exist" });
    }
    await Todo.findByIdAndUpdate(_id, { title, description });
    res.status(200).json({ message: "Updated Successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.body?.id;
    const result = await Todo.findById(id);
    if (!result) {
      return res.status(404).json({ message: "Doesn't exist" });
    }
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { addTask, editTask, getTask, deleteTask };
