export default function () {
  interface User {
    name: string;
    id: number;
  }

  const user1: User = {
    name: "john",
    id: 1,
  };

  class UserAccount {
    name: string;
    id: number;
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
    static getUser(users: Array<User>, index: number): User | number {
      return users.filter((user) => user.id === index).shift();
    }
  }
  const user2: User = new UserAccount("jack", 2);

  const users = [user1, user2];
  console.log("User Account : ", UserAccount.getUser(users, 1)); // this will give the User
  console.log("User Account : ", UserAccount.getUser(users, 1333)); // this will give undefined data type
}
