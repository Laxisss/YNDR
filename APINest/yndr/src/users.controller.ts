/* eslint-disable prettier/prettier */
import { Controller, Get, Header, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<any> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getSingleUser(@Param() params: any): Promise<any> {
    return await new Promise(resolve => {
      this.userService.getSingleUser(params.id).then(data => {
        resolve(data);
      })
    });
  }

  @Post()
  @Header('Content-Type', 'application/json')
  registerUser(@Body() body: object): string {
    return this.userService.registerUser(body);
  }
}
