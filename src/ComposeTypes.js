"use strict";
exports.__esModule = true;
exports.getReverse = exports.getLength = void 0;
var getLength = function (obj) {
    return obj.length;
};
exports.getLength = getLength;
var getReverse = function (obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else {
        return obj[0];
    }
};
exports.getReverse = getReverse;
