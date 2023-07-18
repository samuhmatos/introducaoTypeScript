export interface User {  name: string;
  username: string;
  email: string;
}

export interface Post {
  title: string;
  imageUrl: string;
  user: User;
}

export interface PostComment {
  content: string;
  likes: number;
  user: User;
}

export interface Company {
  name: string;
  cnpj: string;
  website: string;
}
