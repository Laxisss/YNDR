import { Controller, Get, Header, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): string {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getSingleUser(@Param() params: any): string {
    return this.userService.getSingleUser(params.id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  registerUser(@Body() body: object): string {
    return this.userService.registerUser(body);
  }
}
