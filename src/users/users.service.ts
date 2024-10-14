import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

const users: User[] = [
  {
    userId: 1,
    username: 'Alice',
    password: 'topsecret',
  },
  {
    userId: 2,
    username: 'Bob',
    password: '123',
  },
];
@Injectable()
export class UsersService {
  findUserByName = async (username: string): Promise<User | undefined> => {
    return users.find((user) => user.username === username);
  };
}
