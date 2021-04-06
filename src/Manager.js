"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee_1 = require("./Employee");
/**
 * ? Usage of the interface here because ssee the number of properties for the object
 */
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, nickName, employeeDOB, title) {
        if (title === void 0) { title = "manager"; }
        var _this = _super.call(this, name, nickName, employeeDOB) || this;
        _this.title = title;
        return _this;
    }
    Manager.prototype.getNickName = function () {
        return this.employeeNickName;
    };
    Manager.prototype.delegateTasks = function () {
        // console.log("directly writing DOB...", this.employeeDOB); //! private data member only
        console.log("fetching date of birth ... ", this.getDateOfbirth());
        console.log(this.employeeName + " aka " + this.getNickName() + ": Please delegate the task and your DOB is " + _super.prototype.getDateOfbirth.call(this));
    };
    Manager.prototype.printManagerInformation = function () { };
    return Manager;
}(Employee_1["default"]));
exports["default"] = Manager;
