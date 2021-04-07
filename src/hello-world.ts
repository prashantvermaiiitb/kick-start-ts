import Utils from "./utility";
import Variables from "./variables";
import * as interfaces from "./interfaces";
import Employee from "./Employee";
import Manager from "./Manager";
import User from "./User";
import * as ComposedTypes from "./ComposeTypes";
import Generics from "./Generics";
/**
 * ! This error happens because this is a script file that has the Global scope.
 * ! While modules have their own scope but "message" will be in the Global scope.
 * ? to avoid this Error we have to make this is as a module by exporting it or any other thing.
 */
export {}; // if this statement is not there then this file will be treated as the global module and TS will be showing error in that.
let message = "Hello World ... i am back!!!";
Utils.log(`Your first message : ${message}`);
Utils.log(Variables());
interfaces.interfaceDemo({
  firstName: "Jane",
  lastName: "dorsy",
  // middleName: "kumar",
});
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
User();
/**
 * Example usage for the composite types.
 * @param state
 */
function checkState(state: ComposedTypes.widowStates) {
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
Generics();
