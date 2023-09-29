import { Module } from '@nestjs/common';
import { ControllersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  controllers: [ControllersController],
  providers: [UsersService],
})
export class UsersModule {}
