//Interface e Type
interface User {
  firstName: string;
  lastName: string;
}

// type User = {
//     firstName: string;
//     lastName: string;
// }

const person = { firstName: "John", lastName: "Silva", age: 36 };

function getFullName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

console.log(getFullName(person));
