/**
 * Created by sugandhakher on 5/30/18.
 */


var mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: String
});



var Employee = module.exports = mongoose.model('Employee', empSchema);

//
// var api = {
//     addEmployee: addEmployee,
//     getEmployees: getEmployees,
//     getEmployee: getEmployee,
//     updateEmployee: updateEmployee,
//     deleteEmployee: deleteEmployee
// };
// return api;
//

module.exports.getEmployees = function (callback) {
    Employee.find(callback);
};

module.exports.addEmployee = function (newEmployee, callback) {
    Employee.create(newEmployee, callback);
};

module.exports.updateEmployee = function (id, newEmployee, callback) {
    Employee.findByIdAndUpdate(id, newEmployee, callback);      //////////////////
};

module.exports.deleteEmployee = function (id, callback) {
    Employee.findByIdAndRemove(id, callback);///////////////////
};

module.exports.getEmployee = function (id, callback) {
    Employee.findById(id, callback);
};