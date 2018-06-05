/**
 * Created by sugandhakher on 6/4/18.
 */

module.exports = function (app, models) {

    var employeeModel = models.employeeModel;

    app.post("/api/employees", addEmployee);
    app.get("/api/employees/:employeeId", updateEmployee);
    app.put("/api/employees/:employeeId", deleteEmployee);


}