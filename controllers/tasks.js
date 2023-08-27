

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