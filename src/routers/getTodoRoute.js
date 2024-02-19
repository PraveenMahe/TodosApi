const express = require('express');
const router = express.Router();
const todosController = require('../controllers/getTodoController');
const { getAllTodosValidator, getTodoByIdValidator } = require('../validators/getTodoValidator');

router.get('/todos', getAllTodosValidator, todosController.getAllTodos);
router.get('/todos/:id', getTodoByIdValidator, todosController.getTodoById);

module.exports = router;
