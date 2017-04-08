/**
 * Created by Tristan on 08/04/2017.
 */
'use strict';

let express = require('express');
let path = require('path');
var bodyParser = require('body-parser');

let app = express();

// uncomment after placing your favicon in /public
//app.use(require('serve-favicon')(path.join(__dirname, 'public', 'favicon.ico')));
app.use(require('morgan')('dev')); //logger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.json({error: {
        status: err.status,
        message: err.message,
        dev: err.stack || null
    }});
});

module.exports = app;
