
// Optional Paramter
type FuncType = (n: number, m: number, l?: number) => number;

const func: FuncType = (n,m,l) => {
    if(typeof l === "undefined") return n*m;

    return n*m*l;
}

func(20,25);

// Default Value parameter

type FuncType2 = (n: number, m: number, l?: number) => number;

const func2: FuncType = (n,m,l = 20) => {
    return n*m*l;
}

func2(20,25);

// Rest operator
type FuncType3 = (...m: number[]) => number[];

const func3: FuncType3 = (...m) => {
    return m;
}

func3(20,25,30,35,40,60);