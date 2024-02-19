const express = require('express');
const router = express.Router();
const todosController = require('../controllers/updateTodoController');
const todosValidator = require('../validators/updateTodoValidator');

router.put('/todos/:id', [
  todosValidator.todoIdValidationSchema,
  todosValidator.updateValidationSchema,
], todosController.updateTodo);

module.exports = router;

