const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.get('/', tasksController.getIndex);

router.get('/new-task', tasksController.getNewTask);

router.post('/new-task', tasksController.postNewTask);

router.get('/edit-task/:taskId', tasksController.getEditTask);

router.post('/edit-task', tasksController.postEditTask);

router.get('/delete-task/:taskId', tasksController.getDeleteTask);

module.exports = router;