import { Post, PostComment, User } from "./interfaces";
import { coffstack, vitor } from "./mocksData";

export const lucas: User = {
  name: "Lucas",
  username: "lucas123",
  email: "lucas123@gmail.com",
};
export const comment: PostComment = {
  content: "Conteudo do comentario",
  likes: 5,
  user: vitor,
};

// type ContentType = PostComment["user"]

function getProperty<Type, key extends keyof Type>(value: Type, key: key) {
  return value[key];
}

const value = getProperty(comment, "user");
console.log(value);
