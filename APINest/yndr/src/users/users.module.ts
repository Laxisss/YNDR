/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Utilisateurs } from './users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateurs]),
    UsersModule
  ],
  providers: [UsersService,],
  controllers: [UsersController],
  exports: [TypeOrmModule]
})
export class UsersModule {}
