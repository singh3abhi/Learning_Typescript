
/*
We can define the variables with the below syntax
What's the benefit ?
1) It help's in keeping type of variables fixed
2) The vs code intellisense can be used for seeing the suggested function methods when used . on variables

*/

let a: number = 1234;
let nambo: string = "{1234}";
let check: boolean;

let temp; // it is any type, We should try to avoid any as much as possible otherwise it doesnt make any sense to use ts

check = false;

let b = <string>"1234";

// Union type

let surname: string | number;

surname = "Claire";
surname = 2;

// And typescript is smart enough to suggest function methods of the last assigned type


const func = (name: string,age: number): number => {
    console.log(name, age);

    return age/2;
};