/* eslint-disable prettier/prettier */
import { Controller, Get, Header, Param, Body, Post, Delete, Headers } from '@nestjs/common';
import { ScrollerService } from './scroller.service';
import * as jwt from 'jsonwebtoken';

@Controller('likes')
export class ScrollerController {
  constructor(private readonly scrollerService: ScrollerService) {}

  @Get()
  getAllLikes(): Promise<any> {
    return this.scrollerService.getAllLikes();
  }

  @Get('me')
  getMyLikes(@Param() params: any, @Headers() headers: any): Promise<any> {
    const id = jwt.verify(headers.authorization.split(' ')[1], 'YndrSecretKey').userId
    return this.scrollerService.getAmILiked(params.id, id);
    //check if am liked
  }

  @Get(':id/me')
  getAmILiked(@Param() params: any, @Headers() headers: any): Promise<any> {
    const id = jwt.verify(headers.authorization.split(' ')[1], 'YndrSecretKey').userId
    return this.scrollerService.getAmILiked(params.id, id);
    //check if am liked
  }

  @Get(':id')
  getLikesOfUser(@Param() params: any): Promise<any> {
    return this.scrollerService.getLikesOfUser(params.id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  registerLike(@Body() body: object, @Headers() headers: any): string {
    const id = jwt.verify(headers.authorization.split(' ')[1], 'YndrSecretKey').userId
    return this.scrollerService.addLike(body, id);
  }

  @Delete(':id')
  deleteUser(@Param() params: any): Promise<any> {
    return this.scrollerService.removeLike(params.id, params.ID_Trait);
  }
}
