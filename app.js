const express = require('express');
const taskRouter = require('./routes/tasks')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(taskRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})