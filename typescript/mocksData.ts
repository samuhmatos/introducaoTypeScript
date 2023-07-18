import { Company, Post, PostComment, User } from "./interfaces";
export const lucas: User = {
  name: "Lucas",
  username: "lucas123",
  email: "lucas123@gmail.com",
};

export const vitor: User = {
  name: "vitor",
  username: "vitor123",
  email: "vitor123@gmail.com",
};

export const post: Post = {
  title: "Titulo do post",
  imageUrl: "http://example.com/image/id",
  user: lucas,
};

export const comment: PostComment = {
  content: "Conteudo do comentario",
  likes: 5,
  user: vitor,
};

export const coffstack: Company = {
  name: "Coffstack",
  cnpj: "123456789",
  website: "http://www.coffstack.com",
};
