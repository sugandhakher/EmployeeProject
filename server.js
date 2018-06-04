/**
 * Created by sugandhakher on 5/30/18.
 */


var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = "mongodb://localhost:27017/employees";
mongoose.connect(config);
var app = express();
var port = 3000;
app.get('/', function(req, res){
    res.send("Welcome to Employee App")
});

var router = require('./routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/employees', router);

app.listen(process.env.PORT || port, function(){
    console.log("Server running on 3000")
});
