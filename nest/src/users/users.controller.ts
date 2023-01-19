import { Controller, Get } from '@nestjs/common';
import { UsersPros } from './users-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UsersPros[]> {
    return this.usersService.getUsers();
  }
}
