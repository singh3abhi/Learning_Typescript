// const btn = document.getElementById("btn"); // But here we can specify more clearly in following ways

// const btn1 = document.getElementById("btn") as HTMLElement;
// const btn2 = document.getElementById("btn")!;
// const btn3 = <HTMLElement>document.getElementById("btn");

// btn1.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;
// const img1 = document.querySelector("img") as HTMLImageElement;
// const img2 = document.querySelector("img")!;
// const img3 = <HTMLImageElement>document.querySelector("img");

const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;
const res = document.getElementById("res") as HTMLElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const value = Number(myinput.value);

  const h2 = document.createElement("h2");
  h2.textContent = String(value + 20);

  const body = document.body;
  body.append(h2);
};

interface Person {
  //   [key: string]: string;
  name: string;
  email: string;
}

const myObj: Person = {
  name: "Abhi",
  email: "abhi@gmail.com",
};

const getName = (): string => {
  return myObj["name"];
};

const getEmail = (): string => {
  return myObj["email"];
};

// either use keyof Person or keyof typeof myObj
const getData = (key: keyof typeof myObj): string => {
  return myObj[key];
};

getData("name");
