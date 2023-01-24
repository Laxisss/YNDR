/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Utilisateurs } from './users/users.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

import { Traits } from './traits/traits.entity';
import { TraitsController } from './traits/traits.controller';
import { TraitsServices } from './traits/traits.service';
import { TraitsModule } from './traits/traits.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'yndr',
      entities: [Utilisateurs, Traits],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    TraitsModule
  ],
  controllers: [AppController, UsersController, TraitsController],
  providers: [AppService, UsersService, TraitsServices],
})
export class AppModule {}
