"use strict";
exports.__esModule = true;
function default_1() {
    var a;
    var b = "hello man";
    var isBoolean = true;
    var number = 786;
    var name = "prashant";
    // ! this will be giving error
    //   name = true;
    var sentence = "I am beginner \n  " + isBoolean + " with \nlucky Number as " + number + " and \nname : " + name;
    // ? if they are being used and declared they cannot be assigned anyother value
    // ? so these are being used as the sub-type of the other types
    var n = null;
    var b1 = undefined;
    //! this will give you error
    //   n = true;
    var baba = null;
    var kaka = undefined;
    console.log(baba, " and ", kaka);
    var declaringArray = function () {
        var array1 = [1, 2, 3];
        var array2 = [1, 2, 3];
        console.log(array1, array2);
        var array3 = ["d", "g"];
        console.log(array3);
        var array4 = [true, false];
        console.log(array4);
        var array5 = [[1], [2, 3], [4]];
        console.log("double dimension array...", array5);
        console.log("Array with mixed types");
    };
    var declareTuple = function () {
        var myNumber = 100;
        var sampleTuple = [
            "a",
            myNumber,
            true,
            -99,
        ];
        console.log(sampleTuple, "----", sampleTuple.length);
        // ! this will give error order is fixed alongwith Type.
        //sampleTuple = ["r", '212', false, 98923];
    };
    var decalareEnumTypes = function () {
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        var colorGreen = Color.Green;
        console.log("🚀 ~ file: variables.ts ~ line 64 ~ decalareEnumTypes ~ colorGreen value is :", colorGreen);
        // ! cannot re-assign the value to the Enum
        // Color.Green = 6;
        var Rating;
        (function (Rating) {
            Rating[Rating["NI"] = 0] = "NI";
            Rating[Rating["ME"] = 10] = "ME";
            Rating[Rating["EE"] = 11] = "EE";
            Rating[Rating["DE"] = 190] = "DE";
        })(Rating || (Rating = {}));
        var myRating = Rating.DE;
        console.log("🚀 ~ file: variables.ts ~ line 79 ~ decalareEnumTypes ~ Rating", Rating.DE);
    };
    declaringArray();
    declareTuple();
    decalareEnumTypes();
    var sentence2 = sentence;
    return sentence2;
}
exports["default"] = default_1;
