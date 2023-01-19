import { Controller, Get } from '@nestjs/common';
import { UsersPros } from '../dtos/users-dto';
import { UsersService } from '../services/users-service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UsersPros[]> {
    return this.usersService.getUsers();
  }
}
