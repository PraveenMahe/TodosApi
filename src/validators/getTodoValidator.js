const { param } = require('express-validator');
exports.getAllTodosValidator = [];
exports.getTodoByIdValidator = [param('id').isInt({ min: 1 })];
