import { coffstack } from "./mocksData";

function indentify<Type>(value: Type): Type {
  return value;
}

const value = indentify(coffstack);
console.log(value);
