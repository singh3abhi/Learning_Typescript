class Player {
  private height; // Can't be accessed outside this class
  public weight; // By default all properties of class are public

  constructor(height: number, width: number) {
    this.height = height;
    this.weight = width;
  }

  myHeight = () => {
    return this.height;
  };
}

const abhi = new Player(100, 150);
console.log(abhi.myHeight());

class NewPlayer {
  public readonly id: string;
  constructor(
    private height: number, // Can be only accessed in NewPlayer class
    public weight: number, // Can be accessed everywhere
    protected power: number // Can be accessed in NewPlayer and it's subclasses (Classes which extend NewPlayer)
  ) {
    this.id = String(Math.random() * 100);
  }

  getMyHeight = () => this.height;

  // getter

  get myHeight(): number {
    return this.height;
  }

  set changeHeight(height: number) {
    this.height = height;
  }
}

const manu = new NewPlayer(100, 150, 200);

class Plater extends NewPlayer {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special;
  }
}

const krish = new Plater(100, 150, 200, true);
console.log(krish.myHeight);
krish.changeHeight = 500;
console.log(krish.myHeight);

interface NewProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface GetId {
  getId: () => string;
}

class NewProduct implements NewProductType, GetId {
  private id: string = String(Math.random() * 1000);

  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}

  getId = () => this.id;
}

const product1 = new NewProduct("Mac", 2000, 20);

product1.getId();
