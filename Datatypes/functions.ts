
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

// Functions with objects

interface ProductType {
    name: string,
    stock: number,
    price: number,
    photo: string,
    readonly id: string; // Once assigned then it won't change
}

type GetDataType = (product: ProductType) => void;

const getData: GetDataType = (product) => {
    console.log(product.name);
    // product.id = "mkl"; -> Gives error here
}

const productOne: ProductType  = {
    name: "Mac",
    stock: 50,
    price: 1200,
    photo: "sampleImage.png",
    id: "abc",
}

getData(productOne);

// Error type

const errorHandler1 = (): Error => {
    return new Error();
}

// Never Type

const errorHandler2 = (): never => {
    throw new Error();
}