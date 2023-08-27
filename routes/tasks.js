const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.get('/', tasksController.getIndex);
router.get('/new-task', tasksController.getNewTask);

module.exports = router;