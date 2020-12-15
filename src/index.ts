export interface User {
  name: string;
  id: number;
}

export function getName(user: User) {
  return user.name;
}

export function getId(user: User) {
  return user.id;
}
