const Task = require('../models/tasks');


exports.getIndex = (req, res, next) => {
    Task.fetchAllData( returnedTasks => {
        res.render('index', {
            pageTitle: 'Tasks',
            path: '/',
            Tasks: returnedTasks
        })
    })
};


exports.getNewTask = (req, res, next) => {
    res.render('new-task', {
        pageTitle: 'new task',
        path: '/new-task',
        isEditing: false,
    })
};

exports.postNewTask = (req, res, next) => {
    const taskTitle = req.body.taskTitle;
    const taskDescription = req.body.taskDescription;

    const newTask = new Task(null, taskTitle, taskDescription);
    newTask.saveData();
    
    res.redirect('/');
}

exports.getEditTask = (req, res, next) => {
    const taskId = req.params.taskId;
    Task.fetchAllData((Tasks) => {
        const dataToEdit = Tasks.find(task => task.id === taskId)
        if (dataToEdit) {
            res.render('new-task', {
                pageTitle: 'new task',
                path: '/edit-task',
                isEditing: true,
                task: dataToEdit
            })
        } else {
            res.redirect('/');
        }
    });
}

exports.postEditTask  = (req, res, next) => {
    const taskId = req.body.taskId;
    const taskTitle = req.body.taskTitle;
    const taskDescription = req.body.taskDescription;

    const editedTask = new Task(taskId, taskTitle, taskDescription);
    editedTask.saveData();

    res.redirect('/');
}

exports.getDeleteTask = (req, res, next) => {
    const taskId = req.params.taskId;
    Task.deleteTaskById(taskId, () => {
        res.redirect('/');
    })
}   