/* eslint-disable prettier/prettier */
import { Controller, Get, Header, Param, Body, Post, Delete } from '@nestjs/common';
import { PossederService } from './posseder.service';

@Controller('link')
export class PossederController {
  constructor(private readonly possederService: PossederService) {}

  @Get()
  getAlllinks(): Promise<any> {
    return this.possederService.getAllLinks();
  }

  @Get(':id')
  getSingleLink(@Param() params: any): Promise<any> {
    return this.possederService.getLinkOfUser(params.id);
  }

  @Post()
  @Header('Content-Type', 'application/json')
  registerLink(@Body() body: object): string {
    return this.possederService.addLink(body);
  }

  @Delete(':id')
  deleteLink(@Param() params: any): Promise<any> {
    return this.possederService.removeLink(params.id, params.ID_Trait);
  }
}
