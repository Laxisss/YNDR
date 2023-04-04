/* eslint-disable prettier/prettier */
import { Controller, Get, Header, Param, Body, Post, Delete } from '@nestjs/common';
import { PossederService } from './posseder.service';

@Controller('users')
export class PossederController {
  constructor(private readonly possederService: PossederService) {}

  @Get()
  getAllUsers(): Promise<any> {
    return this.possederService.getAllUsers();
  }

  @Get(':id')
  getSingleUser(@Param() params: any): Promise<any> {
    return this.possederService.getSingleUser(params.id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  registerUser(@Body() body: object): string {
    return this.possederService.registerUser(body);
  }

  @Delete(':id')
  deleteUser(@Param() params: any): Promise<any> {
    return this.possederService.removeUser(params.id);
  }
}
