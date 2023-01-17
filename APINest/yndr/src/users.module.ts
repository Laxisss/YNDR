/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Utilisateurs } from './Database/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateurs])
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule]
})
export class UsersModule {}