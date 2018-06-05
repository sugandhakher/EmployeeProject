/**
 * Created by sugandhakher on 5/30/18.
 */


var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = "mongodb://localhost:27017/employees";
mongoose.connect(config);
// app.get('/', function(req, res){
//     res.send("Welcome to Employee App")
// });

var router = require('./routes');
var app = express();
app.express = express;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/employees', router);
app.use(app.express.static(__dirname + '/public/app'));

var port = process.env.PORT || 3000;

app.listen(port);
//
// var models = {
//     employeeModel: require("model.js")()
// };