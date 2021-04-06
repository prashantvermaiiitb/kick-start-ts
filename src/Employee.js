"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, nickName, employeeDOB) {
        this.employeeName = name;
        this.employeeNickName = nickName;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
exports["default"] = Employee;
