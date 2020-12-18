const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

const submitRouter = require('./routes/submission.route');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( express.static('build'));



/** ---------- ROUTES ---------- **/
app.use('/submit', submitRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});