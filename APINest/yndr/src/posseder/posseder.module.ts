/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posseder } from './posseder.entity';
import { PossederController } from './posseder.controller'
import { PossederService } from './posseder.service';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([Posseder]),
    PossederModule
  ],
  providers: [PossederService],
  controllers: [PossederController],
  exports: [TypeOrmModule]
})
export class PossederModule {}
