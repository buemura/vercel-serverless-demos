import { Injectable } from '@nestjs/common';
import { UsersPros } from './users-dto';

@Injectable()
export class UsersService {
  async getUsers(): Promise<UsersPros[]> {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
    ];

    return users;
  }
}
