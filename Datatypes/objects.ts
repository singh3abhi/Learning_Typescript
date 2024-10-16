type Obj = {
    height: number;
    width: number;
    gender?: boolean; // ? -> property is optional
 }

 interface Obj2 {
    height: number;
    width: number;
    gender?: boolean; // ? -> property is optional
 }

 /*
 For objects we should use interface instead of type as interface can be extended like classes
 */

type Func = (nambo: string, age: number) => number;

interface NewObj extends Obj2 {
    scholar: boolean,
    func?: Func,
}

// It is auto requiring height and width because NewObj extends Obj2
const gigi: NewObj = {
    height: 50,
    width: 50,
    scholar: false,
}

const hadid: NewObj = {
    height: 250,
    width: 10,
    scholar: true,
    func: (nambo, age) => {
        return age/2;
    },
}

const obj: Obj = {
    height: 350,
    width: 200,
    gender: true,
}

const obj2: Obj = {
    height: 450,
    width: 100,
    gender: false,
}

const obj3: Obj = {
    height: 750,
    width: 300,
}