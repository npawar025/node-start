//local
const secret = "SUPER SECRET";

//shared in whole app wherever required
const nilesh = "Nilesh";
const neha = "Neha";


/*
console.log(module);
Module {
  id: '.',
  path: 'C:\\Users\\iasni\\OneDrive\\Desktop\\Node',
  exports: {},
  filename: 'C:\\Users\\iasni\\OneDrive\\Desktop\\Node\\4-names.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\iasni\\OneDrive\\Desktop\\Node\\node_modules',
    'C:\\Users\\iasni\\OneDrive\\Desktop\\node_modules',
    'C:\\Users\\iasni\\OneDrive\\node_modules',
    'C:\\Users\\iasni\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}

whatever you dump in export object is accessible anywhere in node app 
*/

module.exports = { nilesh, neha }; //common js exporting method
