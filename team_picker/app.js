const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));

const PORT = 5000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`The Server is ready: http://${HOST}:${PORT}`);
});