const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const taskRouter = require('./routes/tasks');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(taskRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})