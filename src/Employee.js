"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, nickName, employeeDOB) {
        this.employeeName = name;
        this.employeeNickName = nickName;
        this.employeeDOB = employeeDOB;
    }
    Employee.prototype.getDateOfbirth = function () {
        return this.employeeDOB;
    };
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
exports["default"] = Employee;
