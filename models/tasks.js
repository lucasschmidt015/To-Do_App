const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'tasks.json'
);

const getTasksFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Task {

    constructor(taskId, taskTitle, taskDescription) {
        this.id = taskId;
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
    }


    saveData() {
        getTasksFromFile(tasks => {
            if (this.id){
                const taskIndex = tasks.findIndex(t => t.id === this.id);
                const updatedTasks = [...tasks];
                updatedTasks[taskIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedTasks), err => {
                    console.log(err);
                })
            } else {
                this.id = Math.random().toString();

                tasks.push(this);
                fs.writeFile(p, JSON.stringify(tasks), err => {
                    console.log(err);
                })
            }
        })
    }

    static fetchAllData(cb) {
        getTasksFromFile(cb);
    }

    static deleteTaskById(id, cb) {
        getTasksFromFile(tasks => {
            const newTaks = tasks.filter(task => task.id !== id);
            fs.writeFile(p, JSON.stringify(newTaks), err => {
                cb();
            })
        })
    }
}