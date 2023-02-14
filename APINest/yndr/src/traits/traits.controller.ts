/* eslint-disable prettier/prettier */
import { Controller, Get, Header, Param, Body, Post, Delete } from '@nestjs/common';
import { TraitsServices } from './traits.service';

@Controller('traits')
export class TraitsController {
  constructor(private readonly traitsServices: TraitsServices) {}

  @Get()
  getAllTraits(): Promise<any> {
    return this.traitsServices.getAllTraits();
  }

  @Get(':id')
  getSingleTrait(@Param() params: any): Promise<any> {
    return this.traitsServices.getSingleTrait(params.id);
  }

  /**
   * 
   * @param body { Nom : "Nom"}
   * @returns 
   */
  @Post()
  @Header('Content-Type', 'application/json')
  registerTrait(@Body() body: object): string {
    return this.traitsServices.registerTrait(body);
  }

  @Delete(':id')
  deleteTrait(@Param() params: any): Promise<any> {
    return this.traitsServices.removeTrait(params.id);
  }
}
