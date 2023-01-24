/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraitsServices } from './traits.service';
import { TraitsController } from './traits.controller';
import { Traits } from './traits.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Traits]),
    TraitsModule
  ],
  providers: [TraitsServices,],
  controllers: [TraitsController],
  exports: [TypeOrmModule]
})
export class TraitsModule {}
