import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeORM';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ControllersController],
  providers: [UsersService],
})
export class UsersModule {}
