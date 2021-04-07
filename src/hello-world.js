"use strict";
exports.__esModule = true;
var utility_1 = require("./utility");
var variables_1 = require("./variables");
var interfaces = require("./interfaces");
var Employee_1 = require("./Employee");
var Manager_1 = require("./Manager");
var User_1 = require("./User");
var ComposedTypes = require("./ComposeTypes");
var Generics_1 = require("./Generics");
var message = "Hello World ... i am back!!!";
utility_1["default"].log("Your first message : " + message);
utility_1["default"].log(variables_1["default"]());
interfaces.interfaceDemo({
    firstName: "Jane",
    lastName: "dorsy"
});
interfaces.nonInterfaceDemo({ firstName: "John", lastName: "hanna" });
var employee = new Employee_1["default"]("John", "Jony", "08071982");
employee.greet();
var manager = new Manager_1["default"]("Bruce", "willy", "09092007");
manager.delegateTasks();
manager.greet();
console.log("Name of the manager is " + manager.employeeName + " with NickName : " + manager.getNickName()); // ! employeeNickName cannot be accessible outside the derived class, it's accessible using method only
User_1["default"]();
/**
 * Example usage for the composite types.
 * @param state
 */
function checkState(state) {
    switch (state) {
        case "closed":
            console.log("we are closed today !!!");
            break;
        case "minimised":
            console.log("we are minimised can't be seen today !!!");
            break;
        case "open":
            console.log("we are minimised open today !!!");
            break;
    }
}
console.log(checkState("open"));
// console.log(checkState("open1")); //! this will be error because it's not the assignable value to the variable
console.log(ComposedTypes.getLength("prashant"));
console.log(ComposedTypes.getLength(["prashant"]));
console.log(ComposedTypes.getReverse(["prashant"]));
console.log(ComposedTypes.getReverse("prashant"));
Generics_1["default"]();
