const message: string = "Hello world";const numberValue: number = 10;
const booleanValue: boolean = false;

const nullValue: null = null;
const undefinedValue: undefined = undefined;

const value: "primary" | "secondary" = "primary";

const list: string[] = ["a", "b", "c"];

const users = [
  { name: "Jack", age: 20 },
  { name: "Jane", age: 21 },
];

//const jack = users.find((user) => user.name === "Jack");
//console.log(jack);

const jane = users.length > 4 ? users[3] : null;
console.log(jane?.age);
