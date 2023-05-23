import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Get all users, this will return an array of objects [{}]
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
