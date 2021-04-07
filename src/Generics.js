"use strict";
exports.__esModule = true;
function default_1() {
    var a = ["33"];
    var b = ["33"];
    var c = ["33"];
    console.log(a, b, c);
    var a1 = [{ name: "prashant" }, { name: "jacky" }];
    console.log(a1);
    // declare const backpack: Backpack<string>; // giving error
    var backpack = {
        getName: function () {
            return "'what's your name ?";
        },
        add: function (a1, a2) {
            return a1 + a2;
        },
        sub: function (a1, a2) {
            return a2 + a1;
        }
    };
    var object = backpack.getName();
    console.log(object);
    console.log(backpack.add(4, 5));
    console.log(backpack.sub(4, "5"));
    function logPoint(p) {
        console.log(p.x + ", " + p.y);
    }
    // logs "12, 26"
    var point = { x: 12, y: 26 };
    logPoint(point);
    var point3 = { x: 12, y: 26, z: 89 };
    logPoint(point3); // logs "12, 26"
    var rect = { x: 33, y: 3, width: 30, height: 80 };
    logPoint(rect); // logs "33, 3"
    // const color = { hex: "#187ABF" };
    // logPoint(color); // ! will be giving errors
    var VirtualPoint = /** @class */ (function () {
        function VirtualPoint(x, y) {
            this.x = x;
            this.y = y;
        }
        return VirtualPoint;
    }());
    var newVPoint = new VirtualPoint(13, 56);
    logPoint(newVPoint); // logs "13, 56"
}
exports["default"] = default_1;
