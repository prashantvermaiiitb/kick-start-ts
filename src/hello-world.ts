import Utils from "./utility";
import Variables from "./variables";
import * as interfaces from "./interfaces";
import Employee from "./Employee";
import Manager from "./Manager";
/**
 * ! This error happens because this is a script file that has the Global scope.
 * ! While modules have their own scope but "message" will be in the Global scope.
 * ? to avoid this Error we have to make this is as a module by exporting it or any other thing.
 */
export {}; //
let message = "Hello World ... i am back!!!";
Utils.log(`Your first message : ${message}`);
Utils.log(Variables());
interfaces.interfaceDemo({ firstName: "Jane", lastName: "dorsy" });
interfaces.nonInterfaceDemo({ firstName: "John", lastName: "hanna" });
let employee = new Employee("John", "Jony", "08071982");
employee.greet();
let manager = new Manager("Bruce", "willy", "09092007");
manager.delegateTasks();
manager.greet();
console.log(
  `Name of the manager is ${
    manager.employeeName
  } with NickName : ${manager.getNickName()}`
); // ! employeeNickName cannot be accessible outside the derived class, it's accessible using method only
