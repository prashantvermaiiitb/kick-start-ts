/**
 * ! This error happens because this is a script file that has the Global scope.
 * ! While modules have their own scope but "message" will be in the Global scope.
 * ? to avoid this Error we have to make this is as a module by exporting it or any other thing.
 */
export {}; // 
let message = 'Hello World !!!';
console.log(`Your first message : ${message}`);