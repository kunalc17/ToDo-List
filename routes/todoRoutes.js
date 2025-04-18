const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

// GET all todos
router.get('/', todoController.getAllTodos);

// GET a single todo by ID
router.get('/:id', todoController.getTodoById);

// POST a new todo
router.post('/', todoController.createTodo);

// PUT/UPDATE a todo
router.put('/:id', todoController.updateTodo);

// DELETE a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router; 