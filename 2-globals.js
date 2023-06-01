/*
*Globals-

In browser while running JS we have access to window object which has so many useful properties
similar way in node we have global with global variables we can access them anywhere in our node 
application some examples as following

__dirname  - path to current directory
__filename - file name
require    - function to use modules (CommonJS)
module     - info about current module (file)
process    - info about env where the program is being executed


*/

// console.log(__dirname);
//C:\Users\iasni\OneDrive\Desktop\Node
// console.log(__filename);
// C:\Users\iasni\OneDrive\Desktop\Node\2-globals.js
//setTimeout present in global
setInterval(()=>{
    console.log('Hello World');
},1000);
