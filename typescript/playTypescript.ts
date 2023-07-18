import { Post } from "./interfaces";
import { coffstack, lucas, vitor } from "./mocksData";

interface Page<Data> {
  data: Data[];
  count: number;
  nextPage: number | null;
  prevPage: number | null;
}

function getUserList(): Page<Post> {
  return {
    count: 5,
    data: [lucas, vitor],
    nextPage: 2,
    prevPage: null,
  };
}
const users = getUserList();

users.data[0];
