"use strict";
exports.__esModule = true;
var utility_1 = require("./utility");
var variables_1 = require("./variables");
var interfaces = require("./interfaces");
var Employee_1 = require("./Employee");
var Manager_1 = require("./Manager");
var message = "Hello World ... i am back!!!";
utility_1["default"].log("Your first message : " + message);
utility_1["default"].log(variables_1["default"]());
interfaces.interfaceDemo({ firstName: "Jane", lastName: "dorsy" });
interfaces.nonInterfaceDemo({ firstName: "John", lastName: "hanna" });
var employee = new Employee_1["default"]("John", "Jony");
employee.greet();
var manager = new Manager_1["default"]("Bruce", "willy");
manager.delegateTasks();
manager.greet();
console.log("Name of the manager is " + manager.employeeName + " with NickName : " + manager.getNickName()); // ! employeeNickName cannot be accessible outside the derived class, it's accessible using method only
