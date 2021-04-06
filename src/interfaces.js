"use strict";
exports.__esModule = true;
exports.nonInterfaceDemo = exports.interfaceDemo = void 0;
/**
 * Interfaces implementation for the TS
 */
function interfaceDemo(person) {
    console.log("🚀 ~ file: interfaces.ts ~ line 12 ~ interfaceDemo ~ person", person);
}
exports.interfaceDemo = interfaceDemo;
/**
 * ? This is using the person Object but with inline declaration of the object type
 * ? problem here could be that if we are going to add more attributes this will become a non-extendible solution.
 * ? and if there are multiple functions like this, It will be nightmare
 * @param person
 */
function nonInterfaceDemo(person) {
    console.log(person.firstName + " " + person.lastName);
}
exports.nonInterfaceDemo = nonInterfaceDemo;
