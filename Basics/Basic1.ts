/* 
We have written some code and now thing is that we can't directly run the
typescript code/file
-> First this file need to be compiled into js and then it will run

tsc ./basic1.ts

This will compile the typescript file into javascript file and we can run it via script in html

Now the thing is whenever we make changes in ts file then we need to again compile it's equivalent js file
To skip this overhead we can use the watcher

tsc ./basic1.ts -w

This will keep watch on ts file changes and once saved it will auto compile and run it's equivalent js
*/

const a = "Hello World";
console.log(a);

const b = 1234;
console.log(b);