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
import { PossederModule } from './posseder/posseder.module';
import { Posseder } from './posseder/posseder.entity';

import { Scroller } from './scroller/scroller.entity';
import { ScrollerModule } from './scroller/scroller.module';
import { ScrollerController } from './scroller/scroller.controller';
import { ScrollerService } from './scroller/scroller.service';

// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'yndr',
      entities: [Utilisateurs, Traits, Posseder, Scroller],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    TraitsModule,
    PossederModule,
    ScrollerModule
  ],
  controllers: [AppController, UsersController, TraitsController, ScrollerController],
  providers: [AppService, UsersService, TraitsServices, ScrollerService]
})
export class AppModule {}
