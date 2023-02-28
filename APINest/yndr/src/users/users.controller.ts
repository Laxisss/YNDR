/* eslint-disable prettier/prettier */
import { Controller, Get, Header, Param, Body, Post, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): Promise<any> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getSingleUser(@Param() params: any): Promise<any> {
    return this.userService.getSingleUser(params.id);
  }

  @Get(':id/traits')
  getUserTraits(@Param() params: any): Promise<any> {
    return this.userService.getUserTraits(params.id);
  }
  @Patch(':id/traits/:idTraits')
  addTraitToUser(@Param() params: any): Promise<any> {
    return this.userService.addTraitToUser(params.id, params.idTraits);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  registerUser(@Body() body: object): string {
    return this.userService.registerUser(body);
  }

  @Delete(':id')
  deleteUser(@Param() params: any): Promise<any> {
    return this.userService.removeUser(params.id);
  }
}
