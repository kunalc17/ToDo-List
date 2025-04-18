const Todo = require('../models/todoModel');

// Get all todos
const getAllTodos = async () => {
  return await Todo.find().sort({ createdAt: -1 });
};

// Get a single todo by ID
const getTodoById = async (id) => {
  return await Todo.findById(id);
};

// Create a new todo
const createTodo = async (todoData) => {
  const todo = new Todo(todoData);
  return await todo.save();
};

// Update a todo
const updateTodo = async (id, todoData) => {
  return await Todo.findByIdAndUpdate(
    id,
    todoData,
    { new: true, runValidators: true }
  );
};

// Delete a todo
const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
}; 