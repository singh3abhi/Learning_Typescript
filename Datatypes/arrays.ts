/*
Type Alias
We can define custom types to reduce the complex code
*/

type UserName = string  | number;

let surname: UserName;

type funcType = (nambo: string, age: number) => number;

const funct: funcType = (nambo,age) => {
    return age/2;
}

// Arrays

const arr: number[] = [1,2,3,4,5,6];
let brr: string[];

const arr2:Array<string> = ["Abc", "def"];
let brr2:Array<boolean>;

brr2 = [true,true,false];

const crr: Array<string | number> = [123,"Hello"];
const crr2: Array<UserName> = ["World", 999];

const drr: Array<string> = new Array(20); // For creating array with given size

// Tupple Array

const drr2: [number, string, boolean] = [123,"1234", true];