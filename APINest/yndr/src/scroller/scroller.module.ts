/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scroller } from './scroller.entity';
import { ScrollerController } from './scroller.controller'
import { ScrollerService } from './scroller.service';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([Scroller]),
    ScrollerModule
  ],
  providers: [ScrollerService],
  controllers: [ScrollerController],
  exports: [TypeOrmModule]
})
export class ScrollerModule {}
