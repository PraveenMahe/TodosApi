const db = require('../dbConnection');
const { validationResult } = require('express-validator');

exports.getAllTodos = async (req, res) => {
  try {    
    const results = await db('todos').select('*');
    res.json(results);
  } catch (err) {
    console.error('Error retrieving todos:', err.message);
    res.status(500).json({ error: 'Error retrieving todos' });
  }
};

exports.getTodoById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const todoId = req.params.id;

  try {
    const result = await db('todos').where('id', todoId).select('*');
    if (result.length === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(result[0]);
  } catch (err) {
    console.error('Error retrieving todo by ID:', err.message);
    res.status(500).json({ error: 'Error retrieving todo by ID' });
  }
};

