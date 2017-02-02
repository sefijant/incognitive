var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var Promise = require('bluebird');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var database = require('./config/database');
var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users'); 
var test = require('./routes/testr');
    
var app = express();

mongoose.Promise = require('bluebird');
mongoose.createConnection(database.url);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/trump', test);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
  res.render('error');
});

//module.exports = app;

//// Create a schema
//var visitorSchema = new mongoose.Schema({
//    _id: Number,
//    name: String,
//    pid: Number,
//    wanted: Boolean,
//    photos: [{ url: String }],
//    visits: [{
//        date: Date,
//        ea: {
//            anger: Double,
//            contempt: Double,
//            disgust: Double,
//            fear: Double,
//            happiness: Double,
//            natural: Double,
//            sadness: Double,
//            surprise: Double
//        }
//    }],
//    ea: {
//        anger: Double,
//        contempt: Double,
//        disgust: Double,
//        fear: Double,
//        happiness: Double,
//        natural: Double,
//        sadness: Double,
//        surprise: Double
//    }
//});
//// Create a model based on the schema
//var Visitor = mongoose.model('visitor', visitorSchema);
//var visitor = new Visitor({
//    _id: 5,
//    name: "Barak Obama",
//    pid: 123235346,
//    wanted: true,
//    photos: [],
//    visits: [],
//    ea: {
//        anger: 0.003,
//        contempt: 0,
//        disgust: 0,
//        fear: 0,
//        happiness: 0.9,
//        natural: 0,
//        sadness: 0,
//        surprise: 0.008
//    }
//});
//visitor.save(function (err) {
//    if (err)
//        console.log(err);
//    else
//        console.log(visitor);
//});

//// Find all data in the Todo collection
//Todo.find(function (err, vistors) {
//    if (err) return console.error(err);
//    console.log(visitors)
//});