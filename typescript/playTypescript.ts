import { Post, User } from "./interfaces";import { coffstack, comment, vitor } from "./mocksData";

export const lucas: User = {
  name: "Lucas",
  username: "lucas123",
  email: "lucas123@gmail.com",
};

function getProperty<Type>(value: Type, key: keyof Type) {
  return value[key];
}

const value = getProperty(comment, "content");
console.log(value);
