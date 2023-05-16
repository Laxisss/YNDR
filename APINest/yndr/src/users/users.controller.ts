/* eslint-disable prettier/prettier */
import { Controller, Get, Header, Headers, Param, Body, Post, Delete, UseGuards, Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { UsersService } from './users.service';

@Injectable()
class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return false;
    }
    const [type, token] = authHeader.split(' ');

    if (type.toLowerCase() !== 'bearer' || !token) {
      return false;
    }

    try {
      const secret = 'YndrSecretKey';
      jwt.verify(token, secret);
      return true;
    } catch (err) {
      return false;
    }
  }
}

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllUsers(@Headers() headers): Promise<any> {
    const id = jwt.verify(headers.authorization.split(' ')[1], 'YndrSecretKey').userId
    return this.userService.getAllUsers(id);
  }

  @Get('connect')
  logUserIn(@Headers() headers): Promise<any> {
    return this.userService.logMeIn(headers);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getSingleUser(@Param() params: any): Promise<any> {
    return this.userService.getSingleUser(params.id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  registerUser(@Body() body: object): Promise<string> {
    return this.userService.registerUser(body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteUser(@Param() params: any): Promise<any> {
    return this.userService.removeUser(params.id);
  }
}

