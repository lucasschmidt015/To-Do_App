const Task = require('../models/tasks');


exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Tasks',
        path: '/'
    })
};


exports.getNewTask = (req, res, next) => {
    res.render('new-task', {
        pageTitle: 'new task',
        path: '/new-task'
    })
};

exports.postNewTask = (req, res, next) => {
    const taskTitle = req.body.taskTitle;
    const taskDescription = req.body.taskDescription;

    const newTask = new Task(null, taskTitle, taskDescription);
    newTask.saveData();
    
    res.redirect('/');
}