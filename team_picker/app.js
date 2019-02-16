const express = require('express');
const logger = require('morgan');
const app = express();
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.get('/', (req, res) =>{
    res.render('home')
});

const cohortRouter = require('./routes/cohortRouter');
app.use('/cohort', cohortRouter);


const PORT = 5000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`The Server is ready: http://${HOST}:${PORT}`);
});