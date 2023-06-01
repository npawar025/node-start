/*
Modules in node 
-Node  js uses common js  under the hood for implementation of 
 modules also every file in node is a module itself 
 main motive is to write minimum code in to new file so that 
 it will be easy to maintain the code and reusability 

 CommonJS - every file is module by default
 Modules - Encapsulated code (only share minimum)
*/
//common js
const names = require("./4-names");
const sayHi = require("./5-utils");

sayHi("Nilima");
sayHi(names.nilesh);
sayHi(names.neha);
