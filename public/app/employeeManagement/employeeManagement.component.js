angular.module('employeeManagementModule')
    .component('employeeManagement', {
        templateUrl: 'employeeManagement/employeeManagement-template.html',
        controller: function($location) {
            this.employees = [
                "Thor",
                "Iron-Man",
                "Hulk",
                "Vision",
                "Black Widow"
            ];
            this.getEmployee = function(index) {
                return this.employees[index];
            };
            this.addEmployee = function(emp) {
                this.employees.push(emp);
                goToList();
            };
            this.save = function(index, emp) {
                this.employees[index] = emp;
                goToList();
            };
            this.delete = function(index) {
                this.employees.splice(index, 1);
                goToList();
            };

            function goToList() {
                $location.path('#/list');
            }
        }
    });