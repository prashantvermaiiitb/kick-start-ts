"use strict";
exports.__esModule = true;
function default_1() {
    var user1 = {
        name: "john",
        id: 1
    };
    var UserAccount = /** @class */ (function () {
        function UserAccount(name, id) {
            this.name = name;
            this.id = id;
        }
        UserAccount.getUser = function (users, index) {
            return users.filter(function (user) { return user.id === index; }).shift();
        };
        return UserAccount;
    }());
    var user2 = new UserAccount("jack", 2);
    var users = [user1, user2];
    console.log("User Account : ", UserAccount.getUser(users, 1)); // this will give the User
    console.log("User Account : ", UserAccount.getUser(users, 1333)); // this will give undefined data type
}
exports["default"] = default_1;
