//Interface e Type
interface User {
  firstName: string;
  lastName: string;
}

// interface Programmer extends User {
//     favoriteLanguage: string; //TypeScript
//     role: string; //Front-end | Back-end
// }

type Programmer = {
  favoriteLanguage?: string; //TypeScript
  role: string; //Front-end | Back-end
} & User;

function getBio(programmer: Programmer) {
  return `My name is ${programmer.firstName} ${programmer.lastName}. My favorite language is ${programmer.favoriteLanguage} and I work as a ${programmer.role}`;
}

const programmer: Programmer = {
  //favoriteLanguage: "TypeScript",
  role: "Front-end",
  firstName: "Samuel",
  lastName: "Matos",
};

console.log(getBio(programmer));
