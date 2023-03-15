/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posseder } from './posseder.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posseder]),
    PossederModule
  ],
  exports: [TypeOrmModule]
})
export class PossederModule {}
