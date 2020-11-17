interface User {
  name: string;
  id: number;
}

export function hello(user: User) {
  console.log(`hello: ${user.name}`);
}
