import { Post, User } from "./interfaces";import { coffstack, comment, lucas, vitor } from "./mocksData";

//contrain
//value user: User

interface WithUser {
  user: User;
}
function getAuthorName<Type extends WithUser>(value: Type): string {
  return value.user.name;
}

const name = getAuthorName(comment);
